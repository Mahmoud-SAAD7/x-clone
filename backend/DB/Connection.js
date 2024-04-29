import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectMongoDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://minaemad:minaemad@cluster0.jd2gh5w.mongodb.net/TwitterClone?retryWrites=true&w=majority&appName=Cluster0");
        // console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
    }
}

export default connectMongoDB