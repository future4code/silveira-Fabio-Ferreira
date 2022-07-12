import { CustomError } from "../error/customError";
import { Post } from "../model/Post";
import { PostInputDTO } from "../model/PostTypes";

export class PostBussiness {
    public createPost = async (input: PostInputDTO) => {
        try {
            const { photo, description, type } = input;

            if (!photo || !description || !type) {
                throw new CustomError(
                    400,
                    "preencha os campos corretamente."
                );
            };

            const id: string = this.idGenerator.generate();

            console.log("id", id)



            

            const user = new Post(
                id,
                photo,
                description,
                date,
                type
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
}