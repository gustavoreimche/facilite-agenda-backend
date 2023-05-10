import { Router } from "express";
import * as UserController from "../controllers/userController";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/", auth.private, UserController.getUsers);
router.get("/email/:email", UserController.getUsersByEmail);
router.post("/create", UserController.createUser);
router.post("/verificaacesso", UserController.getUserByEmailAndPassword);
router.get("/:id", auth.private, UserController.getUserById);

export default router;
