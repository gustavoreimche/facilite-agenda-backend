import { Router } from "express";
import * as AgendamentoService from '../service/AgendamentoService'

const router = Router();

router.post('/create', (req, res) => {

    req.body.date = new Date(req.body.date);

    let result = AgendamentoService.addAgendamento(req.body)
    result.then(result => {
        res.json(result)
    })
})

router.put('/update/:id', (req, res) => {
    let response = AgendamentoService.updateAgendamento(req.params.id, req.body)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    let response = AgendamentoService.deleteAgendamento(req.params.id)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
})

router.get('/:idUser', (req, res) => {
    let response = AgendamentoService.getAgendamentosByUser(req.params.idUser)
    response.then(value => {
        res.json(value)
    })
})

router.get('/', (req, res) => {
    let response = AgendamentoService.getAgendamentos();
    response.then(value => {
        res.json(value)
    })
})

export default router;