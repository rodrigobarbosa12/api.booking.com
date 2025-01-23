"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_1 = __importDefault(require("./controllers/booking"));
const routes = (0, express_1.Router)();
/**
 * BOOKING
 */
routes.post('/create-booking', booking_1.default.createBooking);
routes.get('/bookings', booking_1.default.getBookings);
exports.default = routes;
