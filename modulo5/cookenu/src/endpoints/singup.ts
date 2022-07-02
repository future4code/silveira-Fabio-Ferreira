import { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";

export async function singup (req:Request, res:Response){
    try {
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role) {
            res.status(422)
            .send("insira corretamente todas informações");
        }

        if (user) {
            res.status(409)
            .send("usuario já cadastrado!")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}