import {Router} from 'express'
import AuthRequest from "../../requests/auth.request";
import AuthController from "../../controllers/auth.controller";

/**
 * ROUTER INITIALIZATION
 */
const route = Router()

/** LOGIN ROUTE */
route.post('/login', AuthRequest.getValidators(), AuthRequest.validateResults, new AuthController().login)

export default route
