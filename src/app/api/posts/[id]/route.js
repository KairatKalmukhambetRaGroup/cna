import connectMongo from "@/database/connect";
import Post from "@/database/models/post";
import { NextResponse } from "next/server";
import { getPostsByHousing } from "../route";
import { mkdir, stat, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";


import Region from "@/database/models/region";
import Housing from "@/database/models/housing";
import City from "@/database/models/city";
import { queryToMongoose } from "@/utilFunctions/dateConvert";
import UserPostVisit from "@/database/models/userpostvisit";

export async function GET(request, context) {
    const { id } = context.params;    

    const {searchParams} = new URL(request.url);
    let ipAddress = searchParams.get("ip");
    const ipX = request.headers.get('X-Real-IP');
    
    if(!ipAddress && ipX){
        ipAddress = ipX;
    }else{
        ipAddress = null;
    }
    const today = new Date().setUTCHours(0,0,0,0); 
    
    
    try {
        await connectMongo();
        
        const post = await Post.findById(id)
            .populate('city')
            .populate('region')
            .populate('housing');

        if(ipAddress){
            const existingUserVisit = await UserPostVisit.findOne({ip: ipAddress, postId: id, timestamp: today});
            if(!existingUserVisit){
                await UserPostVisit.create({ip: ipAddress, postId: id, timestamp: today});
            }
        }

        const visits = await UserPostVisit.countDocuments({postId: id});
        return NextResponse.json({post, visits});
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function DELETE(request, context) {
    const { id } = context.params;    
    try {
        await connectMongo();
        await Post.findByIdAndDelete(id)

        const params = request.nextUrl.searchParams.toString();
        const data = queryToMongoose(params)

        return getPostsByHousing(data);
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
    if(!data.city){
        return NextResponse.json("city", {status: 401});
    }
    // if(!data.region){
    //     return NextResponse.json("region", {status: 401});
    // }

    
    // save to DB
    try {
        await connectMongo();
        const housing = await Housing.findOne({slug: data.housing});
        data.housing = housing._id;
        const city = await City.findOne({name: data.city});
        data.city = city._id;
        if(data.region){
            const region = await Region.findOne({name: data.region});
            data.region = region._id;
        }else{
            data.region = null;
        }

        const existingPost = await Post.findById(id);
        // upload Images
        const images = await formData.getAll('images'); 
        // let imgUrls = [];
        // for (let i = 0; i < images.length; i++) {
        //     const image = images[i];
        //     if(postImages.includes(image)){
        //         imgUrls.push(image);
        //         continue;
        //     }



        //     const buffer = Buffer.from(await image.arrayBuffer());
            
        //     const relativeUploadDir = `/uploads`;
        //     const uploadDir = join(process.cwd(), "public", relativeUploadDir);
        //     try {
        //         await stat(uploadDir);
        //       } catch (e) {
        //         if (e.code === "ENOENT") {
        //           await mkdir(uploadDir, { recursive: true });
        //         } else {
        //           console.error(e);
        //           return NextResponse.json("Something went wrong.",
        //             { status: 500 }
        //           );
        //         }
        //       }
        //     try {
        //         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        //         const filename = `${image.name.replace(
        //           /\.[^/.]+$/,
        //           ""
        //         )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
        //         await writeFile(`${uploadDir}/${filename}`, buffer);
        //         imgUrls.push(filename);
        //         // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
        //     } catch (e) {
        //         console.error("Error while trying to upload a file\n", e);
        //         return NextResponse.json("Something went wrong.",
        //             { status: 500 }
        //         );
        //     }
        // }
        
        data.images = images;


        
        const post = await Post.findByIdAndUpdate(id, {...data}, {new: true});
        
        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}