import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res
    .status(200)
    .json({
      success: true,
      message: "successfully login user",
      token,
      user : { name: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const signup = async (req , res) => {
    const {username ,  email , password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({message : "Name , email and password are required"})
    }

    try{

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message : "User already exists"})
        }

        const newUser = new User({username , email , password});
        await newUser.save();

        const token = jwt.sign({userId : newUser._id} , process.env.JWT_SECRET , {expiresIn : '1d'});

        res.status(201).json({message : "User created successfully" , user : { name: newUser.username }, token});

    }catch(error){
        // console.log(error)
         res.status(500).json({ message: "Server error", error: error.message });
    }
}