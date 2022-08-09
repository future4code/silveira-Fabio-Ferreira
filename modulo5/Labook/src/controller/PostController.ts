import { Request, Response } from "express";
import { PostBussiness } from "../bussiness/PostBussiness";
import { AuthenticationData } from "../model/Post";
import { getPostInputDTO, PostInputDTO } from "../model/PostTypes";
import { Authenticator } from "../services/Authenticator";

export class PostController {
  constructor(private postBussiness: PostBussiness) {}
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;

      const token: string = req.headers.authorization as string;

      const input: PostInputDTO = {
        photo,
        description,
        type,
      };

      const newPost = await this.postBussiness.createPost(input);

      res.status(201).send({ message: "post criado com sucesso!", newPost });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
  public getPostById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const postInput: getPostInputDTO = {
        id,
        token,
      };

      const post = await this.postBussiness.getPostByID(postInput);
      res.status(200).send({ post });
    } catch (error: any) {}
  };
}
