import connectMongo from "@/database/connect";
import PhoneBookCategory from "@/database/models/phonebookcategory";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const categories = await PhoneBookCategory.find().sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse(null, {status: 500});
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();
        await PhoneBookCategory.create(data);

        const categories = await PhoneBookCategory.find().sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse(null, {status: 500});
    }
}

export async function PATCH(request){
    const {data} = await request.json();
    try {
        await connectMongo();
        await PhoneBookCategory.findByIdAndUpdate(data._id, {...data});
        const categories = await PhoneBookCategory.find().sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse(null, {status: 500});
    }
}