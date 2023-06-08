import { Schema, model, Model, connection } from "mongoose";

export type AlunasType = {
	name: string;
	email: string;
	phone: number;
};

const schema = new Schema<AlunasType>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
});

const modelName: string = "aluna";

export default connection && connection.models[modelName]
	? (connection.models[modelName] as Model<AlunasType>)
	: model<AlunasType>(modelName, schema);
