import {NextFunction, Request, Response} from 'express'
import AppError from "../../../core/exception/error/app.error";

export interface HandleGlobalExceptionInterface {
    handler<T extends AppError>(error: T, req: Request, res: Response, next: NextFunction): Response | void
}
