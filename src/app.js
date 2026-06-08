import express from "express";
import db from "./config/db.js";
import appRoutes from "./routes/AppRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors({
    origin: "https://crud-app-client-ecru.vercel.app",
    credentials:true
}));

//DATABASE
db.connection();

//ROUTES
app.use("/api",appRoutes);

//ERROR HANDLER
app.use(errorHandler);

export default app;