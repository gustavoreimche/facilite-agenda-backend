import { Request, Response } from "express";
import * as AlunasService from "../service/AlunasService";

export const createAluna = (req: Request, res: Response) => {
	let result = AlunasService.addAluna(req.body);
	result.then(result => {
		res.json(result);
	});
};

export const teste = (req: Request, res: Response) => {
	res.json({ message: "Hello World!" });
};
