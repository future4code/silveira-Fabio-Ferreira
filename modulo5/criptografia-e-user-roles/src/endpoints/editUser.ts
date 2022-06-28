import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData, USER_ROLES } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname } = req.body
      const token = req.headers.authorization as string

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      if(!token) {
         res.statusCode = 422
         res.statusMessage = "Token não informado"
         throw new Error()
      }

      const authenticator = new Authenticator()
      const tokenData = authenticator.getTokenData(token) as authenticationData

      if(!tokenData) {
         res.statusCode = 401
         res.statusMessage = "Token inválido"
         throw new Error()
      }

      if(tokenData.role !== "USER_ROLES.ADMIN") {
         res.statusCode = 403
         res.statusMessage = "Você não tem autorização"
         throw new Error("Você não tem autorização")
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}