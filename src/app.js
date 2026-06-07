import express from "express";
import db from "./config/db.js";

const app = express();
//MIDDLEWARES

//DATABASE
db.connection();
//ROUTES

//ERROR HANDLER

export default app;