import moment from "moment";
import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/customError";
import { Post } from "../model/Post";
import { getPostInputDTO, PostInputDTO, PostType } from "../model/PostTypes";
import { AuthenticationData } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";

export class PostBussiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}
  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, type } = input;

      const date: string = moment().format("YYYY/MM/DD");
      const id: string = this.idGenerator.generate();

      if (!photo || !description || !type) {
        throw new CustomError(400, "preencha os campos corretamente.");
      }

      const newPost = new Post(id, photo, description, date, type);

      const payload: AuthenticationData = {
        id: newPost.getId(),
      };
      const token = this.authenticator.generate(payload);
      await this.postDatabase.createPost(newPost);

      return newPost;
    } catch (error: any) {
      throw new CustomError(500, "Deu ruim patrão");
    }
  };

  public getPostByID = async (postInput: getPostInputDTO) => {
    try {
      const { id, token } = postInput;
      const tokenData = this.authenticator.getTokenData(token);

      if (!token) {
        throw new CustomError(404, "insira um token");
      }

      if (!id) {
        throw new CustomError(400, "id inválido");
      }

      if (!tokenData) {
        throw new CustomError(400, "token inválido");
      }

      const post = await this.postDatabase.getPostByID(id);

      if (!post) {
        throw new CustomError(404, "post não encontrado");
      }

      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
