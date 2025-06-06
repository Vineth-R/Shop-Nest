

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

// Inngest function to update user data in database
export const syncUserUpdate = inngest.createFunction(
    {
        id: 'update-user-from-clerk',
    },
    {
        event: 'clerk/user.updated',
    },
    async ({ event }) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data;
        const userData = {
            id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageUrl: image_url
        }
        await dbConnect();
        await User.findByIdAndUpdate(id,userData)
    }
);

// Inngest function to delete user data from database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk',
    },
    {
        event: 'clerk/user.deleted',
    },
    async ({ event }) => {
        const { id } = event.data
        await dbConnect();
        await User.findByIdAndDelete(id);
    }
);


export const createUserOrder = inngest.createFunction(
    {
        id: 'create-user-order',
        batchEvents:{
            maxSize: 5,
            timeout: '5s',
        }
    },
    {
        event: 'order/created',
    },
    async ({events})=>{
        const orders = events.map((event) => {
            return {
                userId: event.data.userId,
                amount: event.data.amount,
                address: event.data.address,
                items: event.data.items,
                date: event.data.date,
            }
        });
        await dbConnect();
        await Order.insertMany(orders);

        return { success: true, processed: orders.length};
    }
)