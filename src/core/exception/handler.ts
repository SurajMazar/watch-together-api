import {HandleGlobalExceptionInterface} from "../../@types/core/exception";
import {Request, Response} from "express";

class HandleGlobalException implements HandleGlobalExceptionInterface {
    public handler<T extends Error>(error: T, req: Request, res: Response) {
        return res.status(400).json({
            message: error?.message ?? 'Something went wrong !',
            error: error  // Optionally send the error object in development
        });
    }
}


export default HandleGlobalException
