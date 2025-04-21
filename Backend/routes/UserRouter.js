import express from "express";  // Change require to import
import userController from "../controller/UserController.js";  // Change require to import

const userRouter = express.Router();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.post("/login", userController.login);

export default userRouter;
