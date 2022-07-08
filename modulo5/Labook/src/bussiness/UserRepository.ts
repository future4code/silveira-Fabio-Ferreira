import { User } from "../model/User";

export interface UserRepository {
    instert: (user: User) => Promise<void>
}