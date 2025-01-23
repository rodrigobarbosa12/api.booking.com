import { ExceptionError } from '../infrastructure/utils'

interface Rooms {
  id: number
  name: string
  capacity: number
  price: number
}

interface Result {
  message: string
}

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
]

async function createBooking(roomId: number): Promise<Result> {
  if (!roomId) throw ExceptionError('roomId is required', 401)

  const room = rooms.find((room) => room.id === roomId)

  if (!room) throw ExceptionError('Room not found', 404)

  return { message: 'Room booked with success' }
}

async function getBookings(): Promise<Rooms[]> {
  return rooms
}

export default {
  createBooking,
  getBookings
}
