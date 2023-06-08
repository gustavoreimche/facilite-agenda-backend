import { Router } from "express";
import * as AlunasControlles from "../controllers/alunasController";

const router = Router();

router.post("/", AlunasControlles.createAluna);

export default router;
