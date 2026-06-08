import express from "express";
import db from "./config/db.js";
import appRoutes from "./routes/AppRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();

//MIDDLEWARES
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://crud-app-client-ecru.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

//DATABASE
db.connection();

//ROUTES
app.use("/api",appRoutes);

//ERROR HANDLER
app.use(errorHandler);

export default app;