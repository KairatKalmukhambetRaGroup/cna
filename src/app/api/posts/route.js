import mongoose from "mongoose";
import connectMongo from "@/database/connect";
import Post from "@/database/models/post";
import { NextResponse } from "next/server";
import Housing from "@/database/models/housing";
import { queryToMongoose } from "@/utilFunctions/dateConvert";
import Region from "@/database/models/region";
import { mkdir, stat, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";

export async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params)
    try {
        await connectMongo();

        if(Object.keys(data).length > 0){
            return getPostsByHousing(request);
        }else{
            return getAllPosts();
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}

export async function POST(request) {

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

    // upload Images
    const images = await formData.getAll('images'); 
    let imgUrls = [];
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
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

    // save to DB
    try {
        await connectMongo();
        const housing = await Housing.findOne({slug: data.housing});
        data.housing = housing._id;
        const region = await Region.findOne({name: data.region});
        data.region = region._id;

        const post = await Post.create(data);

        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}



async function getAllPosts() {
    const apartment = await Housing.findOne({slug: 'apartment'});
    const house = await Housing.findOne({slug: 'house'});
    const commercial = await Housing.findOne({slug: 'commercial'});
    const apartments = await Post.find({housing: apartment._id})
        .populate({
            path: 'region',
            select: 'name'
        })
        .populate({
            path: 'housing',
            select: 'slug'
        }).limit(8).sort('-createdAt');
    const houses = await Post.find({housing: house._id})
        .populate({
            path: 'region',
            select: 'name'
        })
        .populate({
            path: 'housing',
            select: 'slug'
        }).limit(8).sort('-createdAt');
    const commercials = await Post.find({housing: commercial._id})
        .populate({
            path: 'region',
            select: 'name'
        })
        .populate({
            path: 'housing',
            select: 'slug'
        }).limit(8).sort('-createdAt');
    return NextResponse.json({apartments: apartments, houses: houses, commercials: commercials});
}

export async function getPostsByHousing(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params);
    if(data.housing){
        const housing = await Housing.findOne({slug: data.housing});
        data.housing = housing._id;
    }
    if(data.region) {
        const region = await Region.findOne({short: data.region});
        data.region = region._id;
    }
    const sortValue = data.sort ? data.sort : 'new';
    let sort = '';
    switch(sortValue){
        case 'cheap':
            sort = 'price';
            break;
        case 'expensive':
            sort = '-price';
            break;
        default: 
            sort = '-createdAt';
    }
    delete data.sort;
    const post = await Post.find(data)
        .populate({
            path: 'region',
            select: 'name'
        })
        .populate({
            path: 'housing',
            select: 'slug'
        })
        .sort(sort);
    return NextResponse.json(post);
}