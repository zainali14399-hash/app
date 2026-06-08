import express, { Router } from "express";
import userController from "./user.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";

const router = express.Router();

router.post("/register",asyncHandler(userController.createUser));
router.get("/users",asyncHandler(userController.getAllUsers));

export default router;
