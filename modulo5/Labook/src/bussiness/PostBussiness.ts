import moment from "moment";
import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/customError";
import { Post } from "../model/Post";
import { PostInputDTO } from "../model/PostTypes";
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

      if (!photo || !description || !type) {
        throw new CustomError(400, "preencha os campos corretamente.");
      }

      const id: string = this.idGenerator.generate();
      console.log("id", id);

      const post = new Post(id, photo, description, date, type);
      //   console.log("user", post);

      const payload: AuthenticationData = {
        id: post.getId(),
      };

      const token = this.authenticator.generate(payload);

      console.log("token", token);

      await this.postDatabase.createPost(post);

      console.log("cheguei");

      return token;
    } catch (error: any) {
      throw new CustomError(500, "Deu ruim patrão");
    }
  };
}
