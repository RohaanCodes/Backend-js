import dotenv from 'dotenv'
import DB_connection from "./db/index.js";
dotenv.config({path:'./env'})
DB_connection()