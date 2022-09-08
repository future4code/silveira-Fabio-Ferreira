import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import Authenticator from "./services/Authenticator"
import { authenticationData } from "./types"
import login from "./endpoints/login"
import getUserById from "./endpoints/getUserById"



app.post('/user/signup', createUser)



app.post('/user/login', login)
app.put('/user/profile/', getUserById)