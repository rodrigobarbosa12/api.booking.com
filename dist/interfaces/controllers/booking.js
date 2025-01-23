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
const booking_1 = __importDefault(require("../../application/booking"));
const booking_2 = __importDefault(require("../serializers/booking"));
const utils_1 = require("../../infrastructure/utils");
function createBooking(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { roomId } = req.body;
            yield booking_1.default.createBooking(roomId);
            return res.send();
        }
        catch (error) {
            return (0, utils_1.factoryErrorCatch)(res, error);
        }
    });
}
function getBookings(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield booking_1.default.getBookings();
            return res.send((0, booking_2.default)(result));
        }
        catch (error) {
            return (0, utils_1.factoryErrorCatch)(res, error);
        }
    });
}
exports.default = {
    getBookings,
    createBooking
};
