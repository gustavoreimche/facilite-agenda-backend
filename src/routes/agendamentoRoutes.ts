import { Router } from "express";
import * as AgendamentoController from '../controllers/agendamentoController'
import * as UserController from '../controllers/userController'

const router = Router();

router.post('/create', AgendamentoController.createAgendamento)

router.put('/update/:id', AgendamentoController.updateAgendamento)

router.delete('/delete/:id', AgendamentoController.deleteAgendamento)

router.get('/:idUser', AgendamentoController.getByIdUser)

router.get('/id/:id', AgendamentoController.getById)

router.get('/', UserController.getUsers)


export default router;