"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ip_1 = __importDefault(require("ip"));
const app_1 = __importDefault(require("../config/app"));
app_1.default.listen(3333, () => (console.log(`Servidor rodando em: http://${ip_1.default.address()}:3333`)));
