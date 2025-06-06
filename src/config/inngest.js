import mongoose from "mongoose";

import { Inngest } from "inngest";
import dbConnect from "./db";
import User from "../models/User";
import Order from "@/models/Order";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "shopnest-next" });

// Inngest function to ave user data to database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk',
    },
    {
        event: 'clerk/user.created',
    },
    async ({ event}) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data
        const userData={
            id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await dbConnect();
        await User.create(userData)
    }
)

export const createUserOrder = inngest.createFunction(
  {
    id: 'create-user-order',
    batchEvents: { maxSize: 5, timeout: '5s' },
  },
  {
    event: 'order/created',
  },
  async ({ events }) => {
    events.forEach(event => {
      console.log("Inngest event data:", event.data);
      console.log("orderItems:", event.data.orderItems);
    });
    
    const orders = events.map((event) => {
      const rawOrderItems = event.data.orderItems || [];
      console.log("Raw orderItems:", rawOrderItems);
      
      // Remove explicit conversion for now (letting Mongoose auto-cast the productId)
      const mappedOrderItems = rawOrderItems.map(item => ({
        productId: item.productId, 
        quantity: item.quantity,
      }));
      
      console.log("Mapped orderItems:", mappedOrderItems);
      
      return {
  userId: event.data.userId,
  amount: event.data.amount,
  address: event.data.address,
  item: mappedOrderItems,  // Changed from "items" to "item"
  date: event.data.date,
};
    });
    
    console.log("Orders to insert:", orders);
    
    await dbConnect();
    await Order.insertMany(orders);
    
    return { success: true, processed: orders.length };
  }
);