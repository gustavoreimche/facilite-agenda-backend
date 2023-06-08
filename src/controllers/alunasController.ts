import { Request, Response } from "express";
import * as AlunasService from "../service/AlunasService";

export const createAluna = (req: Request, res: Response) => {
	let result = AlunasService.addAluna(req.body);
	result.then(result => {
		res.json(result);
	});
};
