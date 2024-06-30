import AuthService from "../../core/services/auth.service";
import {successResponse} from "../../core/utils/response.utils";
import {FastifyReply, FastifyRequest} from "fastify";

interface LoginRequestBody {
    email: string,
    password: string
}

const authService = new AuthService()
class AuthController {

    async login(request: FastifyRequest, response: FastifyReply) {
        const {email, password} = request.body as LoginRequestBody
        const payload = await authService.login(email, password)
        return successResponse(response, "Login success.", payload)
    }

}

export default AuthController
