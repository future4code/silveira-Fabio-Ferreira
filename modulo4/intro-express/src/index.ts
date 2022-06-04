import express, { Request, Response } from 'express'
import cors from 'cors'
import { isPropertyAccessOrQualifiedName } from 'typescript'

const app = express()

app.use(express.json())
app.use(cors())

type PessoaCadastrada = [{
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}]

const Pessoas: PessoaCadastrada = [
    {
        id: "1",
        name: "Fabio",
        phone: 9998989898,
        email: "fabio@gmail.com",
        website: "aq.com/play-now"
    }
]

app.get('/first', (request: Request, response: Response) => {
    response.status(200).send({ message: Pessoas })
})

type CadastroType = {
     id: string,
     title: string,
     body: string,
     userId: number
}



app.post('/send-param', (request: Request, response: Response) => {
    const kumoDesuGaNaniKa = request.body
    response.status(201).send({ kumoDesuGaNaniKa })
})


app.listen(3003, () => {
    console.log(`servidor esta rodando em localhost:3003`)
})