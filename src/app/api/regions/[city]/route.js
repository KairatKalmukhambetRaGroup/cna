import connectMongo from "@/database/connect";
import City from "@/database/models/city";
import Region from "@/database/models/region";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    const { city:cityName } = context.params;
    try {
        await connectMongo();
        const city = await City.findOne({name: cityName});
        const regions = await Region.find({city: city._id}).sort('name');
        return NextResponse.json(regions);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500})
    }
}