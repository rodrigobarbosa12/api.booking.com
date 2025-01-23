"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function render(data) {
    return data.map((item) => (Object.assign(Object.assign({}, item), { serializado: true })));
}
exports.default = render;
