import { POST_TYPE } from "./Post";

export type PostType = {
  id: string;
  photo: string;
  description: string;
  date: string;
  type: POST_TYPE;
};

export type PostInputDTO = {
  photo: string;
  description: string;
  type: POST_TYPE;
};

export type getPostInputDTO = {
  id: string;
  token: string;
};
