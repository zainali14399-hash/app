import userService from "./user.service.js";
import successResponse from "../../utils/successResponse.js";

class userController{

    //CREATE USER
    async createUser(req,res){
        const result = await userService.createUser(req.body);
        successResponse(res,"User registered successfully",result);
    }

    //GET ALL USERS
    async getAllUsers(req,res){
        const result = await userService.getAllUsers();
        successResponse(res,"users fetched",result);
    }
}

export default new userController();