import {FailureResponseInterface, SuccessResponseInterface} from "../../@types/core/utils";
import {StatusCodes} from "http-status-codes";
import {FastifyReply} from "fastify";

/**
 *
 * @param res
 * @param message
 * @param payload
 * @param meta
 * @param statusCode
 */
export const successResponse = <T, U>(res: FastifyReply, message: string, payload: T | null = null, meta: U | null = null, statusCode: number = StatusCodes.OK) => {
    const responseData: SuccessResponseInterface<T, U> = {
        success: true,
        message
    }

    if (payload) {
        responseData.data = payload
    }

    if (meta) {
        responseData.meta = meta
    }

    return res.status(statusCode).send(responseData)
}


export const failureResponse = <T>(res: FastifyReply, message: string, payload: T | null = null, statusCode: number = StatusCodes.BAD_REQUEST) => {
    const responseData: FailureResponseInterface<T> = {
        success: false,
        message
    }

    if (payload) {
        responseData.data = payload
    }

    return res.status(statusCode).send(responseData)
}
