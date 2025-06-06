import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data." });
    }

    // Log the received items
    console.log("Received items:", items);

    // Refactor amount calculation using Promise.all for clarity
    const amounts = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.productId);
        return product ? product.offerPrice * item.quantity : 0;
      })
    );
    const amount = amounts.reduce((acc, curr) => acc + curr, 0);

    // Log the amount and items before sending
    console.log("Sending event with amount:", amount, "and items:", items);

    await inngest.send({
      name: 'order/created',
      data: {
        userId,
        amount: amount + Math.floor(amount * 0.02),
        address,
            orderItems: items,
        date: Date.now(),
      }
    });

    const user = await User.findOne({ clerkId: userId });

    return NextResponse.json({ success: true, message: "Order placed successfully." });
  } catch (error) {
    console.error("Error in order creation:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}