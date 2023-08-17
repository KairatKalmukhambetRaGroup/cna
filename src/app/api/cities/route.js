import connectMongo from "@/database/connect";
import City from "@/database/models/city";
import Region from "@/database/models/region";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectMongo();
        const cities = await City.find();
        let arr = [];
        for(const city of cities){
            const regions = await Region.find({city: city._id});
            arr.push({_id: city._id,name: city.name, regions});
        }
        return NextResponse.json(arr);
    }catch(error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        await City.create(data);        
        const cities = await City.find();

        return NextResponse.json(cities);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}
export async function PATCH(request) {
    const data = await request.json();
    try {
        await connectMongo();

        await City.findByIdAndUpdate(data._id, {...data});        
        const cities = await City.find();
        return NextResponse.json(cities);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}