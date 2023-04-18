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
exports.deleteDespesa = exports.addDespesa = exports.getDespesasByUser = void 0;
const Despesas_1 = __importDefault(require("../models/Despesas"));
function getDespesasByUser(idUser) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Despesas_1.default.find({ idUser });
    });
}
exports.getDespesasByUser = getDespesasByUser;
function addDespesa(despesa) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Despesas_1.default.create(despesa);
    });
}
exports.addDespesa = addDespesa;
function deleteDespesa(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Despesas_1.default.findByIdAndDelete({ _id });
    });
}
exports.deleteDespesa = deleteDespesa;
