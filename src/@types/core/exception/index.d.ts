import {FastifyError, FastifyReply, FastifyRequest} from "fastify";

export interface HandleGlobalExceptionInterface {
    handler(error: FastifyError, req: FastifyRequest, res: FastifyReply)
}
