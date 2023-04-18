import { Router } from "express";
import * as AgendamentoController from '../controllers/agendamentoController'

const router = Router();

router.post('/create', AgendamentoController.createAgendamento)

router.put('/update/:id', AgendamentoController.updateAgendamento)

router.delete('/delete/:id', AgendamentoController.deleteAgendamento)

router.get('/:idUser', AgendamentoController.getByIdUser)

router.get('/id/:id', AgendamentoController.getById)

export default router;