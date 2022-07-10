import { User } from "../model/User";
import { FindByEmailRes } from "../model/UserTypes";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public insertUser = async (
        user: User
    ): Promise<void> => {
        try {
            await BaseDatabase.connection("user_Labook")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error: any) {
            throw new Error(error.message)
        };
    };
    public findByEmail = async (
        email: string
    ): Promise<{}> => {
        try {
            const result: FindByEmailRes = await UserDatabase.
                connection("user_Labook")
                .select("*")
                .where({ email })
            return result[0] && User.toUserModel(result[0])
        } catch (error:any) {
            throw new Error(error.message)
        }
    };
};