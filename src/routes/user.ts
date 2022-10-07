import express from "express";
const routes = express.Router();

import { Register, Login } from "../controller/userController";
import { createProfile } from "../controller/profileController";
import { createPost } from "../controller/postController";
import { addCategory } from "../controller/categoryController";

routes.get("/", (req, res) => {
  res.send("Hello Prisma");
});

routes.post("/register", Register);

routes.post("/login", Login);

routes.post("/createprofile", createProfile);

routes.post("/createpost", createPost);

routes.post("/addcategory", addCategory);

// routes.post('/categoriesonposts', categoryOnPost);

export default routes;
