import mongoose from "mongoose";
import env from "./env.js";

class DBconnection{
    async connection() {
        try {
            await mongoose.connect(env.db);
            console.log(`DB connected successfully`);
        } catch (error) {
            console.log(`db connection failed ${error.message}`);
        }
    }
}

export default new DBconnection();