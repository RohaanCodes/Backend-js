 import mongoose from "mongoose";
 import { DB_NAME } from "../constants.js";
 const DB_connection = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Data base connected. DB host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('connection error',error);
        process.exit(1)
    }
 }
 export default DB_connection