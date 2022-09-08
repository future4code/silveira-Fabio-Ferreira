import { connection } from "../connection";

export const getUsers = async(): Promise<any[]> =>{
    try {
        const users: any = [];

        const result = await connection("AS_users")
        .select("*")

        for(let user of result){
            users.push(user);
    }

    return users;
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
}