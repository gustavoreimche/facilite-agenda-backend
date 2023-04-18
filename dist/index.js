"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const agendamentoRoutes_1 = __importDefault(require("./routes/agendamentoRoutes"));
const despesasRoutes_1 = __importDefault(require("./routes/despesasRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require('./database/mongo');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/agendamentos', agendamentoRoutes_1.default);
app.use('/despesas', despesasRoutes_1.default);
app.listen(3000);
