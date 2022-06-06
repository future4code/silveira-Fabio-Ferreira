import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());

type user = {
    nome: string,
    dataNascimento:string,
    saldo: number,
    extrato: [{
        valor:number,
        data:string,
        descrição:string
    }],
    
}
app.post('/cadastro', (req:Request, res:Response)=>{

})

app.listen(3033, ()=>{
    console.log('ta rodando')
})