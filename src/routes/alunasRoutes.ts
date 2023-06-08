import { Router } from "express";
import * as AlunasController from "../controllers/alunasController";

const router = Router();

router.post("/create", AlunasController.createAluna);

export default router;
