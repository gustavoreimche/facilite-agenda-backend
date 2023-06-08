import { Router } from "express";
import * as AlunasController from "../controllers/alunasController";

const router = Router();

router.post("/create", AlunasController.createAluna);
router.get("/", AlunasController.teste);

export default router;
