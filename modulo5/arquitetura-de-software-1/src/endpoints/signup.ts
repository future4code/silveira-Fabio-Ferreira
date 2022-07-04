import { Request, Response } from "express";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      res
         .status(201)
         .send({})

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}