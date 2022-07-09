import { UserRepository } from "../bussiness/UserRepository";
import { User } from "../model/User";
import { FindByEmailRes } from "../model/UserTypes";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "users_Labook";

    public insertUser = async (
        user: User
    ): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.getId,
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword
            }).into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    // public findByEmail = async (
    //     email: string
    // ): Promise<{}> => {
    //     try {
    //         const result: FindByEmailRes = await UserDatabase.
    //             connection(this.TABLE_NAME)
    //             .select()
    //             .where({ email })

    //         return result[0]
    //     } catch (error:any) {
    //         throw new Error(error.message)
    //     }
    // }
}