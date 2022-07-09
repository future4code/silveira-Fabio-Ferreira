import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { User } from "../model/User";
import { user, UserInputDTO } from "../model/UserTypes";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    constructor(
        private userDatabase: UserRepository,
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

            await this.userDatabase.insertUser(user);

            const token = this.authenticator.generate({ id });

            return token
        } catch (error: any) {
            throw new CustomError(
                500,
                "Deu ruim patrão"
            )
        }
    }
};