import { Router } from "express";
import * as EntradasController from '../controllers/entradasController'

const router = Router();

router.get('/:idUser', EntradasController.getByIdUser)
router.delete('/:id', EntradasController.deleteEntrada)
router.post('/create', EntradasController.createEntrada)

export default router;