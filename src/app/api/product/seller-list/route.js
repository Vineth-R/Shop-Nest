import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import dbConnect from "@/config/db";


export async function GET(request){
    try{

        const {userId}= getAuth(request);

        const isSeller = authSeller(userId);
        

        if(!isSeller){
            return NextResponse.json({success: false, message: "You are not authorized to view this page."});
        }

        await dbConnect();
        const products = await Product.find({})
        return NextResponse.json({success: true, products});

    }catch(error){

        return NextResponse.json({success: false, message: error.message});
    }
}