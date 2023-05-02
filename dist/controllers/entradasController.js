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
exports.createEntrada = exports.deleteEntrada = exports.getByIdUser = void 0;
const EntradasService = __importStar(require("../service/entradasService"));
const getByIdUser = (req, res) => {
    let response = EntradasService.getDespesasByUser(req.params.idUser);
    response.then(value => {
        res.json(value);
    });
};
exports.getByIdUser = getByIdUser;
const deleteEntrada = (req, res) => {
    let response = EntradasService.deleteDespesa(req.params.id);
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
exports.deleteEntrada = deleteEntrada;
const createEntrada = (req, res) => {
    req.body.date = new Date(req.body.date);
    let result = EntradasService.addDespesa(req.body);
    result.then(result => {
        res.json(result);
    });
};
exports.createEntrada = createEntrada;
