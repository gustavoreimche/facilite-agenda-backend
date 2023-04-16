import { Schema, model, Model, connection } from "mongoose";


export type AgendamentoType = {
    hora: string;
    nome: string;
    servico: string;
    valor: number;
    formaPag: string;
    date: Date;
    idUser: string
}

const schema = new Schema<AgendamentoType>({
    hora: { type: String, required: true },
    nome: { type: String, required: true },
    servico: { type: String, required: true },
    valor: { type: Number, required: true },
    formaPag: { type: String, default: 'none'},
    date: { type: Date, required: true },
    idUser: { type: String, required: true, default: '6438a0102b22c9db58afdb99' },
})

const modelName: string = 'agendamento';

export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<AgendamentoType>: model<AgendamentoType>(modelName, schema);
