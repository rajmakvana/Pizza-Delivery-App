import {Menu} from '../models/menu.model.js';
import menuData from './data.js';
import connectDB from '../config/dataBase.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const storeMenuData = async () => {
    try{
        const responese = await Menu.insertMany(menuData);
        console.log("Intialize menu Data")
    }catch(err){
        console.log(err);
    }
}

storeMenuData();