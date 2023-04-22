import { Router } from "express";
import * as UserController from '../controllers/userController'

const router = Router();

router.get('/', UserController.getUsers)
router.post('/create', UserController.createUser)
router.post('/verificaacesso', UserController.getUserByEmailAndPassword)
router.get('/:id', UserController.getUserById)

export default router;