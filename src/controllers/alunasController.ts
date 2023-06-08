import { Request, Response } from "express";
import * as AlunasService from "../service/AlunasService";

export const createAluna = (req: Request, res: Response) => {
	req.body.date = new Date(req.body.date);
	let result = AlunasService.addAluna(req.body);
	result.then(result => {
		res.json(result);
	});
};
