import { Router } from "express";
import * as DespesasController from '../controllers/despesasController'

const router = Router();

router.get('/:idUser', DespesasController.getByIdUser)
router.delete('/:id', DespesasController.deleteDespesa)
router.post('/create', DespesasController.createAgendamento)

export default router;