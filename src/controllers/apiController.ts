import { NextFunction, Request, Response } from 'express'
import httpResponse from '../utils/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../utils/httpError'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            throw new Error('Error occurred!')
            httpResponse(req, res, 200, responseMessage.SUCCESS, { id: 1, name: 'Yogesh Jaga', age: 26 })
        } catch (err) {
            httpError(next, err, req, 500)
        }
    }
}
