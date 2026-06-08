import userRepository from "./user.repository.js";
import bcrypt from "bcrypt";
import appError from "../../utils/AppError.js";

class userService {

    //CREATE USER
    async createUser(data) {
        const existingUser = await userRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new appError("User already exists", 409);
        }
        const hashPassword = await bcrypt.hash(data.password, 10);
        const newUser = await userRepository.createUser({
            ...data,
            password: hashPassword,
            role: "Admin",
            status: "Active"
        });
        return newUser;
    }

    //GET ALL USERS
    async getAllUsers(){
        const users = await userRepository.getAllUsers();
        return users;
    }
}

export default new userService();