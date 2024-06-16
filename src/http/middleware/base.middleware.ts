import {NextFunction, Request, Response} from 'express'

abstract class BaseMiddleware {
    abstract handle(req: Request, res: Response, next: NextFunction): void;
}

export default BaseMiddleware
