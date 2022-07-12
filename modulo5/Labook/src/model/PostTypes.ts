import { POST_TYPE } from "./Post";

export type post = {
    id: string,
    photo: string,
    description: string,
    date: string,
    type: POST_TYPE
};

export type PostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPE
};

