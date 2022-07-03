import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export async function singup (req:Request, res:Response){
    try {
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role) {
            res.status(422)
            .send("insira corretamente todas informações");
        }

        const userDB = new UserDatabase()
        const user = userDB.findUserByEmail(email);

        if (user === user) {
            res.status(409)
            .send("usuario já cadastrado!")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, hashPassword, role);
        await userDB.createUser(newUser);

        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}