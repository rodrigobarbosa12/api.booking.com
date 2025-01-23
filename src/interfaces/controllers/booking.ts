import { Request, Response } from 'express'
import service from '../../application/booking'
import render from '../serializers/booking'
import { factoryErrorCatch } from '../../infrastructure/utils'

async function createBooking(req: Request, res: Response): Promise<Response> {
  try {
    const { roomId } = req.body

    await service.createBooking(roomId)
    return res.send()
  } catch (error) {
    return factoryErrorCatch(res, error)
  }
}

async function getBookings(_req: Request, res: Response): Promise<Response> {
  try {
    const result = await service.getBookings()
    return res.send(render(result))
  } catch (error) {
    return factoryErrorCatch(res, error)
  }
}

export default {
  getBookings,
  createBooking
}
