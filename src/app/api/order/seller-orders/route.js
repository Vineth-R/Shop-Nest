import authSeller from "@/lib/authSeller";
import {getAuth} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import dbConnect from "@/config/db";
import Address from "@/models/Address";
import Order from "@/models/Order";

export async function GET(request) {
    try{
        const {userId} = getAuth(request);

        const isSeller = await authSeller(userId);

        if(!isSeller){
            return NextResponse.json({success: false, message: "You are not authorized to view this page."}, {status: 403});
        }
        await dbConnect();

    Address.length;

        const orders = await Order.find({}).populate('address item.productId');

        return NextResponse.json({success: true, orders});

    }catch(error){
        return NextResponse.json({success: false, message: error.message}, {status: 500});
    }
}