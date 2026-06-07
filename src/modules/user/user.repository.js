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
}

export default new userRespository();