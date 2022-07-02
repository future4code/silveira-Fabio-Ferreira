import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async findUserByEmail(email:string): Promise<User>{
        try {
            const user = await BaseDatabase.connection("user")
            .select("*")
            .where({email});

            return User.toUserModel(user[0])
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}