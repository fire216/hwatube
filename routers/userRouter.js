import express from "express";
import routes from "../routes";
import {
  users,
  changePassword,
  editProfile,
  userDetail
} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
