import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {StatusCodes} from "http-status-codes";

class BaseRequest {

    static validateResults(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.PRECONDITION_FAILED).json({
                message: "Validation error.",
                errors: errors.array()
            })
        }

        return next()
    }
}

export default BaseRequest
