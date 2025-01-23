"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryErrorCatch = exports.ExceptionError = void 0;
var exception_error_1 = require("./exception-error");
Object.defineProperty(exports, "ExceptionError", { enumerable: true, get: function () { return __importDefault(exception_error_1).default; } });
var factory_error_catch_1 = require("./factory-error-catch");
Object.defineProperty(exports, "factoryErrorCatch", { enumerable: true, get: function () { return factory_error_catch_1.factoryErrorCatch; } });
