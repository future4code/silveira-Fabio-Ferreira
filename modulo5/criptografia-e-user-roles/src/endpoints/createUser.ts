import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {



      const { name, nickname, email, password, role } = req.body

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'role', e 'email'")
      }
      
      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }


      // agora utilizamos a classe IdGenerator() com o método
      //generateId() para recuperar um UUID de 32 caracteres
      
      const id: string = new IdGenerator().generateId()
      
      // criou uma instancia da classe HashManager
      const hashManager: HashManager = new HashManager()

      // chamamos o método createHash para criptografar o nosso password
      const senhaCriptografada = hashManager.createHash(password)

      // ao inves de enviar o password como veio, 
      //estamos enviando a senhacriptografada para o banco de dados

      const newUser: user = { id, name, nickname, email,
       password: senhaCriptografada, role: role }
      
      await connection('to_do_list_users')
         .insert(newUser)

      const payload: authenticationData = {
         id: newUser.id,
         role: role
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