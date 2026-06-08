import userModel from "../../models/userModel.js";

class userRespository{

    //CREATE USER
    async createUser(data){
        const addUser = await userModel.create(data);
        return addUser;
    }
    //FIND USER BY EMAIL
    async findUserByEmail(email){
        const user = await userModel.findOne({
            email:email
        });
        return user;
    }

    //GET ALL USERS
    async getAllUsers(){
        const users = await userModel.find();
        return users;
    }
}

export default new userRespository();