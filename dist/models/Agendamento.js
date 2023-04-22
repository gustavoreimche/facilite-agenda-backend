"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    hora: { type: String, required: true },
    nome: { type: String, required: true },
    servico: { type: String, required: true },
    valor: { type: Number, required: true },
    formaPag: { type: String, default: 'none' },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    idUser: { type: String, required: true, default: '6438a0102b22c9db58afdb99' },
});
const modelName = 'agendamento';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[modelName]) ? mongoose_1.connection.models[modelName] : (0, mongoose_1.model)(modelName, schema);
