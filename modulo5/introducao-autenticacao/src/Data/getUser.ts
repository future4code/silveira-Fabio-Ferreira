import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";
import { BaseDatabase } from "./BaseDataBase";

export class userDataBase extends BaseDatabase{
public getUserByEmail = async(email: string): Promise<any> => {
   const result = await BaseDatabase.connection
     .select("*")
     .from("users")
     .where({ email });

   return result[0];
  }

public async getUserById(id: string): Promise<any> {
    const result = await BaseDatabase.connection
      .select("*")
      .from("users")
      .where({ id });

    return result[0];
  }
}