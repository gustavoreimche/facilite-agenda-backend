import alunas, { AlunasType } from "../models/alunas";

export async function addAluna(aluna: AlunasType) {
	return await alunas.create(aluna);
}
