import { Schema, model, Model, connection } from 'mongoose';

export type DespesasType = {
	descricao: string;
	valor: number;
	formaSaque: string;
	day: number;
	month: number;
	year: number;
	idUser: string;
};

const schema = new Schema<DespesasType>({
	descricao: { type: String, required: true },
	valor: { type: Number, required: true },
	formaSaque: { type: String, required: true },
	day: { type: Number, required: true },
	month: { type: Number, required: true },
	year: { type: Number, required: true },
	idUser: { type: String, required: true },
});

const modelName: string = 'despesa';

export default connection && connection.models[modelName]
	? (connection.models[modelName] as Model<DespesasType>)
	: model<DespesasType>(modelName, schema);
