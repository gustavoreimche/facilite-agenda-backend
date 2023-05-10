import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

export const auth = {
	private: async (req: Request, res: Response, next: NextFunction) => {
		let sucess = false;
		// FAZER VERIF DE AUTHORIZATION

		if (req.headers.authorization) {
			const [authType, token] = req.headers.authorization.split(" ");
			if (authType === "Bearer") {
				try {
					const decoded = JWT.verify(token, process.env.JWT_KEY as string);
					console.log(decoded);
					sucess = true;
				} catch (error) {}
			}
		}

		if (sucess) {
			next();
		} else {
			res.status(403);
			res.json({ error: "Unauthorized" });
		}
	},
};
