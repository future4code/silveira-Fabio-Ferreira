import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../model/User";

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}
export class Authenticator {
    public generate(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        });
        return token;
    }
}