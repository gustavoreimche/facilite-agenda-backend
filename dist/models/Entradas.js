"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    formaPag: { type: String, required: true, default: 'none' },
    idUser: { type: String, required: true },
});
const modelName = 'entrada';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[modelName]) ? mongoose_1.connection.models[modelName] : (0, mongoose_1.model)(modelName, schema);
