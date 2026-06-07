import express from "express";
import userController from "./user.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";

const router = express.Router();

router.post("/register",asyncHandler(userController.createUser));

export default router;
