import { User } from "../model/User";

export interface UserRepository {
    insertUser: (user: User) => Promise<void>,
    // findByEmail: (email: string) => Promise<{}>
}