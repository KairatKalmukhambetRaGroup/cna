import connectMongo from "@/database/connect";
import City from "@/database/models/city";
import Region from "@/database/models/region";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    const {id} = context.params;
    try {
        await connectMongo();
        const city = await City.findById(id);
        const regions = await Region.find({city: id}).sort('name');
        return NextResponse.json({city, regions});
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}