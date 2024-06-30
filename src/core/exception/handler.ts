import {HandleGlobalExceptionInterface} from "../../@types/core/exception";
import {StatusCodes} from "http-status-codes";
import {FastifyError, FastifyReply, FastifyRequest} from "fastify";
import {ValidationErrorItem} from "joi";

class HandleGlobalException implements HandleGlobalExceptionInterface {
    public async handler(error: FastifyError, req: FastifyRequest, res: FastifyReply) {
        if (error?.validation) {
            const validationErrors = (error?.validation as unknown as ValidationErrorItem[])?.map((err) => {
                return {
                    message: err?.message,
                    path: err?.path?.join('.'),
                    type: err?.type
                }
            }).reduce((error, formatted) => {
                if (error[formatted.path]) {
                    return {
                        ...error,
                        [formatted.path]: [
                            ...error[formatted.path],
                            ...[formatted]
                        ]
                    }
                }
                return {
                    ...error,
                    [formatted.path]: [formatted]
                }
            }, {} as Record<string, Array<Record<string, unknown>>>)

            return res.status(StatusCodes.PRECONDITION_FAILED).send({
                message: 'Validation Error',
                errors: validationErrors
            });
        }

        return res.status(error?.statusCode ?? StatusCodes.BAD_REQUEST).send({
            message: error?.message ?? 'Something went wrong !',
            debug: error  // Optionally send the error object in development
        });
    }

}


export default HandleGlobalException
