import { Request, Response } from "express";
import app from "../app";
import connection from "../connection";
import { userDataBase } from "../Data/getUser";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";


export default async function getUserById (req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
  
      const authenticator = new Authenticator()
      const authenticationData = authenticator.getTokenData(token) as authenticationData;
      
      const findUsers = new userDataBase()
      const user = await findUsers.getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };