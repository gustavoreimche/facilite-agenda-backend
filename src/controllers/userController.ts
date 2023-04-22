import { Request, Response } from "express";
import * as UserService from '../service/UserService'

export const createUser = (req: Request, res: Response) => {
    let result = UserService.addUser(req.body)
    result.then(result => {
        res.json(result)
    })
}

export const getUsers = (req: Request, res: Response) => {
    let result = UserService.getUsers();
    result.then(result => {
        res.json(result)
    })
}

export const getUsersByEmail = (req: Request, res: Response) => {
    let result = UserService.getUserByEmail(req.params.email);
    result.then(result => {
        res.json(result)
    })
}

export const getUserById = (req: Request, res: Response) => {
    let result = UserService.getUserById(req.params.id);
    result.then(result => {
        res.json(result)
    })
}

export const getUserByEmailAndPassword = (req: Request, res: Response) => {
    let result = UserService.getUserByEmailAndPassword(req.body);
    result.then(result => {
        if(result == null) {
            res.json({isAuth: false})
        } else {
            res.json({isAuth: true, result})
        }
    });
}

export const delUser = (req: Request, res: Response) => {
    let result = UserService.delUser(req.body);
    result.then(result => {
        res.json(result)
    });
}

export const updateUser = (req: Request, res: Response) => {
    let result = UserService.updateUser(req.body);
    result.then(result => {
        res.json(result)
    });
}
