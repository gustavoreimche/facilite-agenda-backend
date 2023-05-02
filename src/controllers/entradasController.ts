import {Request, Response} from 'express'
import * as EntradasService from '../service/entradasService'

export const getByIdUser = (req: Request, res: Response) => {
    let response = EntradasService.getDespesasByUser(req.params.idUser)
    response.then(value => {
        res.json(value)
    })
}

export const deleteEntrada = (req: Request, res: Response) => {
    let response = EntradasService.deleteDespesa(req.params.id)
    response.then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404)
            res.send({ "error": "Agendamento não encontrado" })
        }
    })
}

export const createEntrada = (req: Request, res: Response) => {
    req.body.date = new Date(req.body.date);
    let result = EntradasService.addDespesa(req.body)
    result.then(result => {
        res.json(result)
    })
}
