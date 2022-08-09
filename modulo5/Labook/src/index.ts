import { PostBussiness } from "./bussiness/PostBussiness";
import { UserBusiness } from "./bussiness/UserBusiness";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
import { PostDatabase } from "./data/PostDatabase";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/idGenerator";

const userBusiness = new UserBusiness(
  new UserDatabase(),
  new IdGenerator(),
  new HashManager(),
  new Authenticator()
);

const userController = new UserController(userBusiness);

const postBussiness = new PostBussiness(
  new PostDatabase(),
  new IdGenerator(),
  new Authenticator()
);

const postController = new PostController(postBussiness);

app.post("/user", userController.createUser);
app.post("/user/login", userController.login);

app.post("/post/create", postController.createPost);
app.get("/post/:id", postController.getPostById);
