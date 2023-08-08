import connectMongo from "@/database/connect";
import TextContent from "@/database/models/textcontent";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const about = await TextContent.findOne({slag: 'about'});
        return NextResponse.json(about.content);
    }catch (error) {
        console.log(error);
        return NextResponse.json(null, {status:500});
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        const exists = await TextContent.findOne({slag: 'about'}); 
        if(exists){
            const newAbout = await TextContent.findByIdAndUpdate(exists._id, {content: data.text}, {new: true});
            return NextResponse.json(newAbout.content);
        }else{
            const about = await TextContent.create({slag: 'about', content: data.text})
            return NextResponse.json(about.content);
        }
    }catch (error) {
        console.log(error);

        return NextResponse.json(null, {status:500});
    }
}