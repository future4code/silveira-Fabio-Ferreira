import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { AuthenticationData, User } from "../model/User";
import { user, UserInputDTO } from "../model/UserTypes";
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

            console.log("id", id)


            const hashedPassword = await this.hashManager.hash(password);

            

            const user = new User(
                id,
                name,
                email,
                hashedPassword
            );
            console.log("user", user)

            const payload:AuthenticationData = {
                id: user.getId()
            }

            const token = this.authenticator.generate(payload);
            
            console.log("token", token)

            await this.userDatabase.insertUser(user);

            console.log("cheguei")


            return token
        } catch (error: any) {
            throw new CustomError(
                500,
                "Deu ruim patrão"
            )
        }
    }
};