import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors)

app.get('/first',(request:Request, response:Response)=>{
    const something = "this is something(i guess)"
    response.status(200).send({message: something})
})


app.listen(3003,() => {
    console.log(`servidor esta rodando em localhost:3003`)
})