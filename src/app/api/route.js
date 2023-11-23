import connectMongo from "@/database/connect";
import UserVisit from "@/database/models/uservisit";
import { NextResponse } from "next/server";

export async function GET(request){
    let ip = request.headers.get('x-real-ip');
    const forwardedFor = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    if(!ip && forwardedFor){
        ip = forwardedFor;
    }else{
        ip = null;
    }
    const timestamp = new Date().setUTCHours(0,0,0,0); 

    try {
        await connectMongo();
        if(ip){
            const existingUserVisit = await UserVisit.findOne({ip, timestamp});
            if(!existingUserVisit){
                await UserVisit.create({ip, timestamp});
            }
        }

        return NextResponse.json(timestamp);
    } catch (error) {
        console.log(error)
        return NextResponse.json(null);
    }
}