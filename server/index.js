import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/dataBase.js";
import cartRoutes from "./routes/cart.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

// connect to database
connectDB();

app.use('/api/cart', cartRoutes);


app.listen(PORT , () => {
    console.log(`server is running on port ${PORT} 🚀`);
});