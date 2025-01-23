"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExceptionError = (message, code) => Object
    .assign(new Error(), { message, code });
exports.default = ExceptionError;
