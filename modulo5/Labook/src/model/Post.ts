export enum POST_TYPE {
    NORMAL = "NORMAL",
    ADMIN = "EVENTO"
}

export interface AuthenticationData {
    id: string,
    type: POST_TYPE
}

export class Post {
    constructor(
        protected id: string,
        protected photo: string,
        protected description:string,
        protected date: string,
        protected type: POST_TYPE
    ) { }

    public getId() {
        return this.id;
    }
    public getPhoto() {
        return this.photo;
    }
    public getDescription() {
        return this.description;
    }
    public getPassword() {
        return this.date;
    }
    public getType() {
        return this.type;
    }

    static toUserModel(data: any): Post {
        return new Post(data.id, data.photo, data.description, data.date, data.type)
    }
}