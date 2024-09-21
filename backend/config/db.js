import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://cyrustabji:08106028623@cluster0.2fxz2vh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}