import connectMongo from "@/database/connect";
import User from "@/database/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();
        const existingUser = await User.findOne({email: data.email});
        if(existingUser)
            return NextResponse.json({error: "User already exist"}, {status: 400});
        const hash = await bcrypt.hash(data.password, 12);

        const user = await User.create({...data, password: hash});
        const users = await User.find();
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}