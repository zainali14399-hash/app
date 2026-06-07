import express from "express";
import db from "./config/db.js";
import appRoutes from "./routes/AppRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

//MIDDLEWARES
app.use(express.json());

//DATABASE
db.connection();

//ROUTES
app.use("/api",appRoutes);

//ERROR HANDLER
app.use(errorHandler);

export default app;