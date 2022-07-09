import { Request, Response } from "express";
import { UserBusiness } from "../bussiness/UserBusiness";
import { UserInputDTO } from "../model/UserTypes";

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

            res.status(201).send({ message: "Usuário criado!", token })
        } catch (error: any) {

        }
    }

}