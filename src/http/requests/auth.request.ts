import BaseRequest from "./base.request";
import {body} from "express-validator";

class AuthRequest extends BaseRequest {

    static getValidators() {
        return [
            body('email').notEmpty().isEmail(),
            body('password').notEmpty()
        ];
    }
}


export default AuthRequest
