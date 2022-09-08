import { generateToken, getTokenData } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { userInput } from "../types/user";
import UserData from '../data/UserData'
import { compare } from "bcryptjs";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { getUsers } from "../data/getAllUsers";

class UserBussines {

    // metodo da classe
    async signUp(user:userInput) {

        const { name, email, password, role } = user

        // 1 regra de negocio - validar os valores 
        if (
            !name ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }

        // 2 regra de negocio - gerar meu id 
        const id: string = generateId()

        // 3 regra de negocio - fazer o hash da senha
        const cypherPassword = await hash(password);

       
        // 4 regra de negocio - inserir os valores no banco de dados
        const userData = new UserData()
        
         await userData.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        // 5 regra de negocio - gerar o token
        const token: string = generateToken({
            id,
            role: role
        })

        return token

    }

    // metodo login
    async logar(user:any) {
        const userFromDB = await selectUserByEmail(user.email);

        const hashCompare = await compare(user.password, userFromDB.password);

        const accessToken = generateToken({id: userFromDB.id, role: userFromDB.role});

        if(!hashCompare) {
            throw new Error("senha incorreta!")
        }
        return accessToken
    }

    async get(token: string) {
				
        getTokenData(token);
        return await getUsers()
    }
}

export default UserBussines