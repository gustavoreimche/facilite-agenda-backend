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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.delUser = exports.getUserByEmailAndPassword = exports.getUserById = exports.getUsersByEmail = exports.getUsers = exports.createUser = void 0;
const UserService = __importStar(require("../service/UserService"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const createUser = (req, res) => {
    let result = UserService.addUser(req.body);
    result.then((result) => {
        const token = jsonwebtoken_1.default.sign({
            id: result._id,
            email: result.email,
            password: result.password,
        }, process.env.JWT_KEY);
        res.json({ isAuth: true, result, token });
    });
};
exports.createUser = createUser;
const getUsers = (req, res) => {
    let result = UserService.getUsers();
    result.then((result) => {
        res.json(result);
    });
};
exports.getUsers = getUsers;
const getUsersByEmail = (req, res) => {
    let result = UserService.getUserByEmail(req.params.email);
    result.then((result) => {
        res.json(result);
    });
};
exports.getUsersByEmail = getUsersByEmail;
const getUserById = (req, res) => {
    let result = UserService.getUserById(req.params.id);
    result.then((result) => {
        res.json(result);
    });
};
exports.getUserById = getUserById;
const getUserByEmailAndPassword = (req, res) => {
    let result = UserService.getUserByEmailAndPassword(req.body);
    result.then((result) => {
        if (result == null) {
            res.json({ isAuth: false });
        }
        else {
            const token = jsonwebtoken_1.default.sign({
                id: req.body._id,
                email: req.body.email,
                password: req.body.password,
            }, process.env.JWT_KEY, { expiresIn: "24h" });
            res.json({ isAuth: true, token, result });
        }
    });
};
exports.getUserByEmailAndPassword = getUserByEmailAndPassword;
const delUser = (req, res) => {
    let result = UserService.delUser(req.body);
    result.then((result) => {
        res.json(result);
    });
};
exports.delUser = delUser;
const updateUser = (req, res) => {
    let result = UserService.updateUser(req.body);
    result.then((result) => {
        res.json(result);
    });
};
exports.updateUser = updateUser;
