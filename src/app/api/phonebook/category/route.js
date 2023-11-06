import connectMongo from "@/database/connect";
import PhoneBookCategory from "@/database/models/phonebookcategory";
import PhoneBookUpcategory from "@/database/models/phonebookupcategory";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongo();
        const categories = await PhoneBookUpcategory.find().populate('sub').sort('name');

        // const categories = await PhoneBookCategory.find().sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}

export async function POST(request) {
    const data = await request.json();
    try {
        await connectMongo();

        if(data.parent){
            const upcategory = await PhoneBookUpcategory.findById(data.parent);
            if(upcategory){
                const newcategory = await PhoneBookCategory.create(data);
                await PhoneBookUpcategory.findByIdAndUpdate(upcategory._id, {$push: {sub: newcategory._id}});
            }
        }else{
            await PhoneBookUpcategory.create(data);
        }

        const categories = await PhoneBookUpcategory.find().populate('sub').sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json(null, {status: 500})
    }
}

export async function PATCH(request){
    const data = await request.json();
    try {
        await connectMongo();
        console.log(data);
        const category = await PhoneBookCategory.findById(data._id);
        if(category){
            await PhoneBookCategory.findByIdAndUpdate(category._id, {...data});
            console.log('category')
        }else{
            const upcategory = await PhoneBookUpcategory.findById(data._id)
            if(upcategory){
                await PhoneBookUpcategory.findByIdAndUpdate(upcategory._id, {...data});
                console.log('upcategory')
            }
        }

        const categories = await PhoneBookUpcategory.find().populate('sub').sort('name');
        return NextResponse.json(categories);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500})
    }
}