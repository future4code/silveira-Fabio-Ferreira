import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import Authenticator from "./services/Authenticator"
import { authenticationData } from "./types"
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"


const senhaCriptografada = new HashManager().createHash("batata")

console.log(senhaCriptografada)

const compare = new HashManager().compareHash("tomate", senhaCriptografada)

console.log(compare)

app.post('/user/signup', createUser)

// EXEMPLO 4 
// Criar endpoint de login 

app.post('/user/login', login)
app.put('/user/edit/', editUser)