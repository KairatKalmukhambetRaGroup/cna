import connectMongo from "@/database/connect";
import User from "@/database/models/user";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request){
    const {email, password} = await request.json();
    
    try {
        await connectMongo();
        const existingUser = await User.findOne({email});
        if(!existingUser)
            return NextResponse.json({error: "User does not exist"}, {status: 404});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect)
            return NextResponse.json({error: "Invalid credentials"}, {status: 401});
        
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.TOKEN_KEY, {expiresIn: "60d"});

        return NextResponse.json({user: existingUser, token});
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}