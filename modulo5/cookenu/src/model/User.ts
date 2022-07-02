export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User{
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string,
        protected role: USER_ROLES  
    ){}

    static toUserModel(data:any): User {
        return new User (data.id, data.name, data.email, data.password, data.role)
    }
}