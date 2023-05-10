import { Router } from "express";
import * as UserController from '../controllers/userController'
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/", auth.private, UserController.getUsers);
router.get("/email/:email", auth.private, UserController.getUsersByEmail);
router.post("/create", auth.private, UserController.createUser);
router.post('/verificaacesso', UserController.getUserByEmailAndPassword)
router.get("/:id", auth.private, UserController.getUserById);

export default router;