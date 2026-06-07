import "dotenv/config";
import appError from "../utils/AppError.js";

const env = {
    port: process.env.PORT,
    db: process.env.db_url
}

if(!env.db){
    throw new appError("Provide Database Connection String");
}

export default env;