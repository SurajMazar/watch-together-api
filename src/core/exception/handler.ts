import {HandleGlobalExceptionInterface} from "../../@types/core/exception";
import {NextFunction, Request, Response} from "express";
import AppError from "./error/app.error";
import {StatusCodes} from "http-status-codes";

class HandleGlobalException implements HandleGlobalExceptionInterface {
    // eslint-disable-next-line
    public handler<T extends AppError>(error: T, req: Request, res: Response, next: NextFunction) {
        res.status(error?.statusCode ?? StatusCodes.BAD_REQUEST).json({
            message: error?.message ?? 'Something went wrong !',
            error: error  // Optionally send the error object in development
        });
    }
}


export default HandleGlobalException
