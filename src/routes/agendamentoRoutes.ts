import { Router } from "express";
import * as AgendamentoService from '../service/AgendamentoService'

const router = Router();

router.post('/agendamentos', (req, res) => {

    req.body.date = new Date(req.body.date);

    AgendamentoService.addAgendamento(req.body)
    res.json(req.body)
})

router.put('/agendamentos/:id', (req, res) => {
    AgendamentoService.updateAgendamento(req.params.id, req.body)
    res.json(req.body)
})

router.delete('/agendamentos/:id', (req, res) => {
    let response = AgendamentoService.deleteAgendamento(req.params.id)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({"error": "Agendamento não encontrado" })
        }
    })
})

router.get('/iduser/:idUser', (req, res) => {
    let response = AgendamentoService.getAgendamentosByUser(req.params.idUser)
    response.then(value => {
        res.json(value)
    })
})


export default router;