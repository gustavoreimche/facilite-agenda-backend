import { Schema, model, Model, connection } from "mongoose";


export type EntradasType = {
    descricao: string;
    valor: number;
    day: number;
    month: number;
    year: number;
    idUser: string
}

const schema = new Schema<EntradasType>({
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    idUser: { type: String, required: true},
})

const modelName: string = 'entrada';

export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<EntradasType>: model<EntradasType>(modelName, schema);
