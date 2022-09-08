import { Request, Response } from "express";
import UserBussines from "../Bussines/UserBussines";
import { userInput } from "../types/user";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            // instanciar a classe bussines
            const userBussines = new UserBussines()

            // chamar o metodo de signUp , que esta no bussines e ele retorna um token
            const token = await userBussines.signUp(newUser)

            res.status(201).send({ message: "usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };
            const bussiness = new UserBussines();
            const token = await bussiness.logar(loginData);

            res.status(200).send({ token });
        } catch (error: any) {
            res.status(400).send({error: error.message});
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const token = req.headers.authorization!;
            
            const bussiness = new UserBussines();

            const users = await bussiness.get(token);

            res.send(users).status(200);
        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
}

export default UserController