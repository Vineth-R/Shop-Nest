import mongoose from "mongoose";
import {unique} from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    cartItem:{
        type: Object,
        default: {}
    }
},{minimize: false});

const User= mongoose.models.user || mongoose.model("user", userSchema);

export default User;