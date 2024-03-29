import { connection } from "../connection"
import { user } from "../types/user"

class UserData{

   async insertUser(user: user){
        await connection.insert({
           id: user.id,
           name: user.name,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('AS_users')
     }  
}

export default UserData