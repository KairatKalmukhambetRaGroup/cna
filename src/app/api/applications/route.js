import Application from "@/database/models/application";
import connectMongo from "@/database/connect";
import { NextResponse } from "next/server";
import { queryToMongoose } from "@/utilFunctions/dateConvert";

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();
        await Application.create(data);
        return NextResponse.json(null);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params)

    try {
        await connectMongo();
        const applications = await Application.find({archive: data.archive}).sort('-createdAt');

        return NextResponse.json(applications);

    } catch (error) {

        return NextResponse.json(null, {status: 500});
    }
}

export async function PATCH(request) {
    const data = await request.json();
    try {
        await connectMongo();
        await Application.findByIdAndUpdate(data.id, {archive: true});

        const applications = await Application.find({archive: data.archive}).sort('-createdAt');

        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}