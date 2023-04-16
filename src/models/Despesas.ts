import { Schema, model, Model, connection } from "mongoose";


export type DespesasType = {
    descricao: string;
    valor: number;
    date: Date;
    idUser: string
}

const schema = new Schema<DespesasType>({
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    date: { type: Date, required: true },
    idUser: { type: String, required: true, default: '64388f9d5a87a927ba68ea49' },
})

const modelName: string = 'despesa';

export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<DespesasType>: model<DespesasType>(modelName, schema);
