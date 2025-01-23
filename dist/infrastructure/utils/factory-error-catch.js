"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryErrorCatch = void 0;
function factoryErrorCatch(res, error) {
    var _a, _b;
    if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) {
        const { response: { data } } = error;
        return res.status(data.code || 400).json({ message: data.message });
    }
    if (error === null || error === void 0 ? void 0 : error.message) {
        return res.status(error.code).json({ message: error.message });
    }
    if ((_b = error === null || error === void 0 ? void 0 : error.precedingErrors) === null || _b === void 0 ? void 0 : _b.length) {
        const { originalError: { info: { message } } } = error.precedingErrors[0];
        return res.status(400).json({ message });
    }
    return res.status(error.status || 400).json(error.message);
}
exports.factoryErrorCatch = factoryErrorCatch;
