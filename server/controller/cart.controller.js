import { Menu } from "../models/menu.model.js";

export const getMenuData = async (req , res) => {
    try {
        const data = await Menu.find({});
        console.log(data)
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({message : "Error fetching menu data", error : error.message});
    }
}