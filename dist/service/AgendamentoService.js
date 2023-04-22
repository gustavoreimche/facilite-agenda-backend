"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgendamentoById = exports.deleteAgendamento = exports.updateAgendamento = exports.getAgendamentosByUser = exports.getAgendamentos = exports.addAgendamento = void 0;
const Agendamento_1 = __importDefault(require("../models/Agendamento"));
function addAgendamento(agendamento) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Agendamento_1.default.create(agendamento);
    });
}
exports.addAgendamento = addAgendamento;
function getAgendamentos() {
    return __awaiter(this, void 0, void 0, function* () {
        const agendamentos = yield Agendamento_1.default.find({});
        return agendamentos;
    });
}
exports.getAgendamentos = getAgendamentos;
function getAgendamentosByUser(idUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const agendamentos = yield Agendamento_1.default.find({ idUser });
        return agendamentos;
    });
}
exports.getAgendamentosByUser = getAgendamentosByUser;
function updateAgendamento(_id, agendamento) {
    return __awaiter(this, void 0, void 0, function* () {
        let agendamentoTemp = yield Agendamento_1.default.updateOne({ _id }, {
            nome: agendamento.nome,
            valor: agendamento.valor,
            servico: agendamento.servico,
            formaPag: agendamento.formaPag
        });
        return agendamentoTemp;
    });
}
exports.updateAgendamento = updateAgendamento;
function deleteAgendamento(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Agendamento_1.default.findByIdAndDelete({ _id });
    });
}
exports.deleteAgendamento = deleteAgendamento;
function getAgendamentoById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Agendamento_1.default.findOne({ _id });
    });
}
exports.getAgendamentoById = getAgendamentoById;
