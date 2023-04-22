"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, },
    type: { type: Number, required: true, default: 0 }
});
const modelName = 'user';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[modelName]) ? mongoose_1.connection.models[modelName] : (0, mongoose_1.model)(modelName, schema);
