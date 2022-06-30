import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async findUserByEmail(email:string){
        try {
            const user = await BaseDatabase.connection("user")
            .select("*")
            .where({email});

            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}