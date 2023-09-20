import connectMongo from "@/database/connect";
import PhoneBook from "@/database/models/phonebook";
import PhoneBookCategory from "@/database/models/phonebookcategory";
import { queryToMongoose } from "@/utilFunctions/dateConvert";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
    const { id } = context.params;
    
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params)
    try {
        await connectMongo();
        
        await PhoneBook.findByIdAndDelete(id);

        let category = await PhoneBookCategory.findById(data.category);

        const phonebooks = await PhoneBook.find({category: category._id}).sort('name'); 
        return NextResponse.json(phonebooks);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function GET(request, context) {
    const {id} = context.params;

    try {
        await connectMongo();

        const contact = await PhoneBook.findById(id).populate('category');

        return NextResponse.json(contact)
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}