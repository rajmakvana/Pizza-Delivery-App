import mongoose from "mongoose";

const menuschema = new mongoose.Schema({
    name : String,
    image : String,
    price : Number,
    size : String
});

export const Menu = mongoose.model("Menu" , menuschema);