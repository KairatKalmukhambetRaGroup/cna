import connectMongo from "@/database/connect";
import PhoneBook from "@/database/models/phonebook";
import PhoneBookCategory from "@/database/models/phonebookcategory";
import UserPhonebookVisit from "@/database/models/userphonebookvisit";
import { queryToMongoose } from "@/utilFunctions/dateConvert";
import { NextResponse } from "next/server";

export async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params);

    const {searchParams} = new URL(request.url);
    let ipAddress = searchParams.get("ip");
    const ipX = request.headers.get('X-Real-IP');
    
    if(!ipAddress && ipX){
        ipAddress = ipX;
    }else{
        ipAddress = null;
    }
    const today = new Date().setUTCHours(0,0,0,0); 


    try {
        await connectMongo();        
        if(data.category){
            const phonebooks = await PhoneBook.find({
                $or:[
                    {'name':new RegExp(data.q, 'i')}, 
                    {'description':new RegExp(data.q, 'i')}, 
                ], category: data.category}).populate('category'); 
            return NextResponse.json(phonebooks);
        }
        if(data.q){
            const phonebooks = await PhoneBook.find({
                $or:[
                    {'name':new RegExp(data.q, 'i')}, 
                    {'description':new RegExp(data.q, 'i')}, 
                ]}).populate('category'); 
            return NextResponse.json(phonebooks);
        }
        const phonebooks = await PhoneBook.find().sort('name').populate('category'); 
        if(ipAddress){
            const existingUserVisit = await UserPhonebookVisit.findOne({ip: ipAddress, timestamp: today});
            if(!existingUserVisit){
                await UserPhonebookVisit.create({ip: ipAddress, timestamp: today});
            }
        }
        
        return NextResponse.json(phonebooks);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, {status: 500});
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        let category = await PhoneBookCategory.findById(data.category);

        await PhoneBook.create({...data, category: category._id});

        // const phonebooks = await PhoneBook.find({category: category._id}).sort('name'); 
        const phonebooks = await PhoneBook.find().sort('name').populate('category'); 
        return NextResponse.json(phonebooks);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function PATCH(request) {
    const data = await request.json();
    try {
        await connectMongo();

        // let category = await PhoneBookCategory.findById(data.category);

        const exists = await PhoneBook.findById(data._id);
        if(!exists)
            return NextResponse.json(null, {status: 404});
        await PhoneBook.findByIdAndUpdate(exists._id, {...data});

        // await PhoneBook.create({...data, category: category._id});

        // const phonebooks = await PhoneBook.find({category: data.category}).sort('name'); 
        const phonebooks = await PhoneBook.find().sort('name').populate('category'); 
        return NextResponse.json(phonebooks);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}