import {FastifyInstance} from "fastify";
import AuthController from "../../controllers/auth.controller";
import {LoginRequestSchema} from "../../requests/auth.request";

const authRoutes = async (fastify: FastifyInstance) => {

    /** LOGIN  */
    fastify.post('/login', {
        schema: {
            body: LoginRequestSchema
        }
    }, new AuthController().login)

}


export default authRoutes
