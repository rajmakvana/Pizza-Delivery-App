import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/dataBase.js";
import cartRoutes from "./routes/cart.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);


app.use(express.json());
app.use(express.urlencoded({extended : true}));



// connect to database
connectDB();

app.use('/api/cart', cartRoutes);
app.use('/api/auth' , authRoutes );


app.listen(PORT , () => {
    console.log(`server is running on port ${PORT} 🚀`);
});