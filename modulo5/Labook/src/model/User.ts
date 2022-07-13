export interface AuthenticationData {
    id: string
}

export class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string
    ) { }

    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getEmail() {
        return this.email;
    }
    public getPassword() {
        return this.password;
    }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password)
    }
}