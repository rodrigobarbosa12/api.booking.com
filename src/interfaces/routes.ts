import { Router } from 'express'
import controller from './controllers/booking'

const routes = Router()

/**
 * BOOKING
 */
routes.post('/create-booking', controller.createBooking)
routes.get('/bookings', controller.getBookings)

export default routes
