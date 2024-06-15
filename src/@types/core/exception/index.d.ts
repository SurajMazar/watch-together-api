import {NextFunction, Request, Response} from 'express'

export interface HandleGlobalExceptionInterface {
    handler<T extends Error>(error: T, req: Request, res: Response, next: NextFunction): Response | void
}
