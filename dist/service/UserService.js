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
exports.updateUser = exports.addUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const usuarios = yield User_1.default.find({});
        return usuarios;
    });
}
exports.getUsers = getUsers;
function addUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        yield User_1.default.create({
            name: newUser.name,
            password: newUser.password,
            email: newUser.email,
            type: newUser.type
        });
    });
}
exports.addUser = addUser;
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        let userTemp = yield User_1.default.findOne({ id });
        if (userTemp != null) {
            userTemp.name = user.name;
            userTemp.email = user.email;
            userTemp.password = user.password;
            yield userTemp.save();
        }
    });
}
exports.updateUser = updateUser;
