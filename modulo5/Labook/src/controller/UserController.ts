import { Request, Response } from "express";
import { UserBusiness } from "../bussiness/UserBusiness";
import { UserInputDTO, UserInputLoginDTO } from "../model/UserTypes";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }
    public createUser = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;

            const input: UserInputDTO = {
                name,
                email,
                password
            };

            const token = await this.userBusiness.createUser(input);

            res.status(201).send({ token })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
    
            const inputLogin: UserInputLoginDTO = {
                email,
                password
            };

            const token = await this.userBusiness.login(inputLogin);
            res.status(200).send({message:"login bem sucedido", token })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

}