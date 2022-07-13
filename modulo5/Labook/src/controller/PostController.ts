import { Request, Response } from "express";
import { PostBussiness } from "../bussiness/PostBussiness";
import { PostInputDTO } from "../model/PostTypes";

export class PostController {
    constructor(
        private postBussiness: PostBussiness
    ) { }
    public createUser = async (req: Request, res: Response) => {
        try {
            const { photo, description, type } = req.body;

            const token: string = req.headers.authorization as string;

            const input: PostInputDTO = {
                photo,
                description,
                type
            };

            await this.postBussiness.createPost(input);

            res.status(201).send({ token });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}