import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { AuthenticationData, User } from "../model/User";
import { UserInputDTO, UserInputLoginDTO } from "../model/UserTypes";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    
    public createUser = async (input: UserInputDTO) => {
        try {
            const { name, email, password } = input;

            if (!name || !email || !password) {
                throw new CustomError(
                    400,
                    "preencha os campos corretamente."
                );
            };

            if (name.length < 3) {
                throw new InvalidName();
            };

            if (!email.includes("@")) {
                throw new InvalidEmail();
            };

            if (password.length < 8) {
                throw new CustomError(
                    400,
                    "Senha muito curta, a senha deve conter no minimo 8 caracteres."
                );
            };

            const id: string = this.idGenerator.generate();


            const hashedPassword = await this.hashManager.hash(password);  

            const user = new User(
                id,
                name,
                email,
                hashedPassword
            );


            const payload:AuthenticationData = {
                id: user.getId()
            }

            const token = this.authenticator.generate(payload);
            


            await this.userDatabase.insertUser(user);




            return token
        } catch (error: any) {
            throw new CustomError(
                500,
                "Deu ruim patrão"
            )
        }
    }
    public login = async (inputLogin: UserInputLoginDTO) =>{
        try {

            const { email, password } = inputLogin;

            if (!email || !password) {
                throw new CustomError(
                    400,
                    "preencha os campos corretamente."
                );
            }
    
            const userDB = new UserDatabase()
            const user = await userDB.findByEmail(email);
    
    
            if (!user) {
                throw new CustomError(
                    400,
                    "Usuário já cadastrado."
                );
            }
    
            const hashManager = new HashManager();
            const passwordIsCorrect = await hashManager.compare(password, user.getPassword());
    
            if (!passwordIsCorrect) {
                throw new CustomError(
                    400,
                    "Email ou senha incorretos."
                );
            }
    
    
            const authenticator = new Authenticator();
            const token = authenticator.generate({ id: user.getId() })

            return token
        } catch (error) {
            
        }
    }
};