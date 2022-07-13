import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public createPost = async (post: Post): Promise<void> => {
    try {
      await BaseDatabase.connection("post_Labook").insert({
        id: post.getId(),
        photo: post.getPhoto(),
        description: post.getDescription(),
        date: post.getDate(),
        type: post.getType(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
