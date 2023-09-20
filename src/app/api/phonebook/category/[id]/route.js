import connectMongo from "@/database/connect";
import PhoneBook from "@/database/models/phonebook";
import PhoneBookCategory from "@/database/models/phonebookcategory";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    const {id} = context.params;
    try {
        await connectMongo();
        const category = await PhoneBookCategory.findById(id);
        const numbers = await PhoneBook.find({category: category._id}).sort('name');
        return NextResponse.json({category, numbers});
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}