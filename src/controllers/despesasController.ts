import {Request, Response} from 'express'
import * as DespesasService from '../service/despesasService'

export const getByIdUser = (req: Request, res: Response) => {
    let response = DespesasService.getDespesasByUser(req.params.idUser)
    response.then(value => {
        res.json(value)
    })
}

export const deleteDespesa = (req: Request, res: Response) => {
    let response = DespesasService.deleteDespesa(req.params.id)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
}

export const createAgendamento = (req: Request, res: Response) => {
    req.body.date = new Date(req.body.date);
    let result = DespesasService.addDespesa(req.body)
    result.then(result => {
        res.json(result)
    })
}