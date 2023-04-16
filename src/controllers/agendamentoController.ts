import {Request, Response} from 'express'
import * as AgendamentoService from '../service/AgendamentoService'

export const createAgendamento = (req: Request, res: Response) => {

    req.body.date = new Date(req.body.date);

    let result = AgendamentoService.addAgendamento(req.body)
    result.then(result => {
        res.json(result)
    })
}

export const updateAgendamento = (req: Request, res: Response) => {
    let response = AgendamentoService.updateAgendamento(req.params.id, req.body)
    response.then(response => {
        if (response.matchedCount>0) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
}

export const deleteAgendamento = (req: Request, res: Response) => {
    let response = AgendamentoService.deleteAgendamento(req.params.id)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
}

export const getByIdUser = (req: Request, res: Response) => {
    let response = AgendamentoService.getAgendamentosByUser(req.params.idUser)
    response.then(value => {
        res.json(value)
    })
}