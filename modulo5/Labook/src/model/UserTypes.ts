export type user = {
    id: string,
    name: string,
    email: string,
    password: string
};

export type UserInputDTO = {
    name: string,
    email: string,
    password: string
};

export type UserInputLoginDTO = {
    email: string,
    password: string
};

export type FindByEmailRes ={
    id:string
    name:string
    email:string
    password:string
}[]