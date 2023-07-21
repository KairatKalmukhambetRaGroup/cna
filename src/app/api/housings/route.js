import mongoose from "mongoose";
import connectMongo from "@/database/connect";
import Housing from '@/database/models/housing';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const housings = await Housing.find();
        return NextResponse.json(housings);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        const housing = await Housing.create(data);        
        return NextResponse.json(housing);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}