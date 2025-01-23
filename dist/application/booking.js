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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../infrastructure/utils");
const rooms = [
    {
        id: 1,
        name: "Single Room",
        capacity: 1,
        price: 100,
        reviews: 23,
        guest: 4,
        imageUrl: "/images/room1.jpeg",
    },
    {
        id: 2,
        name: "Double Room",
        capacity: 2,
        price: 150,
        reviews: 9,
        guest: 4,
        imageUrl: "/images/room2.jpeg",
    },
    {
        id: 3,
        name: "Family Suite asdds",
        capacity: 4,
        price: 250,
        reviews: 15,
        guest: 4,
        imageUrl: "/images/room3.jpeg",
    },
];
function createBooking(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!roomId)
            throw (0, utils_1.ExceptionError)('roomId is required', 401);
        const room = rooms.find((room) => room.id === roomId);
        if (!room)
            throw (0, utils_1.ExceptionError)('Room not found', 404);
        return { message: 'Room booked with success' };
    });
}
function getBookings() {
    return __awaiter(this, void 0, void 0, function* () {
        return rooms;
    });
}
exports.default = {
    createBooking,
    getBookings
};
