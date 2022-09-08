import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
   // EXEMPLO 3
   // Refatore o endpoint de cadastro para incluir um fluxo de autenticação. 
   // Os requisitos são:

   // O caminho deve ser "/user/signup"
   //O usuário precisa escolher uma senha ao se cadastrar 
   //(altere também a tabela de usuários)
   // O usuário deve receber um identificador no padrão UUID
   // A resposta deve ter um corpo contendo um token de autenticação


      const { email, password } = req.body

      if (!email || !password || email.indexOf("@") === -1)  {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

     
      const [user] = await connection('users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      // agora utilizamos a classe IdGenerator() com o método
      //generateId() para recuperar um UUID de 32 caracteres

      const id: string = new IdGenerator().generateId()

      const newUser: user = { id, email, password }

      await connection('users')
         .insert(newUser)

      const payload: authenticationData = {
         id: newUser.id
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({ token })

   } catch (error: any) {
      console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}