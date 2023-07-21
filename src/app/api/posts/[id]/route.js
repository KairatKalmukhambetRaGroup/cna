import mongoose from "mongoose";
import connectMongo from "@/database/connect";
import Post from "@/database/models/post";
import { NextResponse } from "next/server";
import { async } from "regenerator-runtime";
import { getPostsByHousing } from "../route";
import { mkdir, stat, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";

import Region from "@/database/models/region";
import Housing from "@/database/models/housing";

export async function GET(request, context) {
    const { id } = context.params;    
    try {
        await connectMongo();
        const post = await Post.findById(id)
            .populate('region')
            .populate('housing');
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function DELETE(request, context) {
    const { id } = context.params;    
    try {
        await connectMongo();
        await Post.findByIdAndDelete(id)
        return getPostsByHousing(request);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function PATCH(request, context) {
    const { id } = context.params;    
    const formData = await request.formData();
    // check data
    var data = {};
    formData.forEach(function(value, key){
        if(key.includes('[')){
            let keys = key.split('[');
            if(!data[keys[0]])
                data[keys[0]] = {};
            keys[1] = keys[1].split(']')[0];
            data[keys[0]][keys[1]] = value;
        } else{
            data[key] = value;
        }     
    });


    if(!data.housing){
        return NextResponse.json("housing", {status: 401});
    }
    if(!data.region){
        return NextResponse.json("region", {status: 401});
    }

    
    // save to DB
    try {
        await connectMongo();
        const housing = await Housing.findOne({slug: data.housing});
        data.housing = housing._id;
        const region = await Region.findOne({name: data.region});
        data.region = region._id;

        const existingPost = await Post.findById(id);
        const postImages = existingPost.images;
        // upload Images
        const images = await formData.getAll('images'); 
        let imgUrls = [];
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if(postImages.includes(image)){
                imgUrls.push(image);
                continue;
            }



            const buffer = Buffer.from(await image.arrayBuffer());
            
            const relativeUploadDir = `/uploads`;
            const uploadDir = join(process.cwd(), "public", relativeUploadDir);
            try {
                await stat(uploadDir);
              } catch (e) {
                if (e.code === "ENOENT") {
                  await mkdir(uploadDir, { recursive: true });
                } else {
                  console.error(e);
                  return NextResponse.json("Something went wrong.",
                    { status: 500 }
                  );
                }
              }
            try {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const filename = `${image.name.replace(
                  /\.[^/.]+$/,
                  ""
                )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
                await writeFile(`${uploadDir}/${filename}`, buffer);
                imgUrls.push(filename);
                // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
            } catch (e) {
                console.error("Error while trying to upload a file\n", e);
                return NextResponse.json("Something went wrong.",
                    { status: 500 }
                );
            }
        }
        
        data.images = imgUrls;


        
        const post = await Post.findByIdAndUpdate(id, {...data}, {new: true});
        
        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}