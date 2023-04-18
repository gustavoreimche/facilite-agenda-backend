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
exports.getByIdUser = exports.deleteAgendamento = exports.updateAgendamento = exports.createAgendamento = void 0;
const AgendamentoService = __importStar(require("../service/AgendamentoService"));
const createAgendamento = (req, res) => {
    req.body.date = new Date(req.body.date);
    let result = AgendamentoService.addAgendamento(req.body);
    result.then(result => {
        res.json(result);
    });
};
exports.createAgendamento = createAgendamento;
const updateAgendamento = (req, res) => {
    let response = AgendamentoService.updateAgendamento(req.params.id, req.body);
    response.then(response => {
        if (response.matchedCount > 0) {
            res.json(response);
        }
        else {
            res.status(404);
            res.send({ "error": "Agendamento não encontrado" });
        }
    });
};
exports.updateAgendamento = updateAgendamento;
const deleteAgendamento = (req, res) => {
    let response = AgendamentoService.deleteAgendamento(req.params.id);
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
exports.deleteAgendamento = deleteAgendamento;
const getByIdUser = (req, res) => {
    let response = AgendamentoService.getAgendamentosByUser(req.params.idUser);
    response.then(value => {
        res.json(value);
    });
};
exports.getByIdUser = getByIdUser;
