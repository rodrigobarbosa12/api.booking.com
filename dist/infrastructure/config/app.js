"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../../interfaces/routes"));
const app = (0, express_1.default)();
const server = new http_1.default.Server(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.default);
exports.default = server;
