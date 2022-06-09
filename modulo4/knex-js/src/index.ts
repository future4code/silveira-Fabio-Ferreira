import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./conection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1
//a) recebemos alguns parametros em um segundo array que se faz desnecessario por isso 
//usamos o indice [0] para definir que só queremos receber as informações requisitadas

//b)
const procurarAtors = async (nome: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${nome}"
    `)
    return result
}


//c)
const countActors = async (gender: string) => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
};

// /--------------------------------------------------------------------------/

//EXERCICIO 2
//A)
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
      await connection("Actor")
        .update({
          name: req.body.name,
          salary: req.body.salary,
          birth_date: req.body.birthDate,
          gender: req.body.gender
        }).where({ id: req.params.id })
      res.status(200).send({ id: req.params.id })
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
    }
  })
//B)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await connection("Actor").where({ id: req.params.id }).delete()
      res.status(200).send("Ator deletado")
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
    }
  })
  //C)
  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`server is running in https://localhost:${address.port}`)
    } else {
        console.error(`failure upon starting server.`)
    }

})