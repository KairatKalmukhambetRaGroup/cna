import connectMongo from "@/database/connect";
import Region from "@/database/models/region";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const regions = await Region.find().sort('name');
        return NextResponse.json(regions);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500})
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        await Region.create(data);        
        const regions = await Region.find({city: data.city}).sort('name');
        return NextResponse.json(regions);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}

export async function PATCH(request) {
    const data = await request.json();
    try {
        await connectMongo();
        await Region.findByIdAndUpdate(data._id, {...data});        
        const regions = await Region.find({city: data.city}).sort('name');
        return NextResponse.json(regions);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}