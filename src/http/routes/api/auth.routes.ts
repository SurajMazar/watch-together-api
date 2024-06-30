import {FastifyInstance} from "fastify";
import AuthController from "../../controllers/auth.controller";

const authRoutes = async (fastify: FastifyInstance) => {

    /** LOGIN  */
    fastify.post('/login', new AuthController().login)

}


export default authRoutes
