import AuthService from "../../core/services/auth.service";
import {NextFunction, Request, Response} from "express";
import {successResponse} from "../../core/utils/response.utils";

class AuthController {

    protected authService: AuthService;

    constructor() {
        this.authService = new AuthService()
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            const payload = await this.authService.login(email, password)
            return successResponse(res, "Login success.", payload)
        } catch (exception) {
            next(exception)
        }
    }

}

export default AuthController
