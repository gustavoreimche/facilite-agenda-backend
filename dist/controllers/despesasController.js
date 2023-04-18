"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAgendamento = exports.deleteDespesa = exports.getByIdUser = void 0;
const DespesasService = __importStar(require("../service/despesasService"));
const getByIdUser = (req, res) => {
    let response = DespesasService.getDespesasByUser(req.params.idUser);
    response.then(value => {
        res.json(value);
    });
};
exports.getByIdUser = getByIdUser;
const deleteDespesa = (req, res) => {
    let response = DespesasService.deleteDespesa(req.params.id);
    response.then(response => {
        if (response) {
            res.json(response);
        }
        else {
            res.status(404);
            res.send({ "error": "Agendamento não encontrado" });
        }
    });
};
exports.deleteDespesa = deleteDespesa;
const createAgendamento = (req, res) => {
    req.body.date = new Date(req.body.date);
    let result = DespesasService.addDespesa(req.body);
    result.then(result => {
        res.json(result);
    });
};
exports.createAgendamento = createAgendamento;
