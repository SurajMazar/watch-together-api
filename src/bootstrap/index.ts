import express, {Express} from "express";
import appConfig from "../core/config/app.config";
import HandleGlobalException from "../core/exception/handler";
import AppError from "../core/exception/error/app.error";
import {StatusCodes} from "http-status-codes";
import {CustomRequest} from "../@types/http/middleware";
import AuthRoutes from "../http/routes/api/auth.routes";

class Bootstrap {
    protected app: Express;

    constructor() {
        this.app = express()
    }

    init() {
        this.serverInit()
    }

    private serverInit() {

        this.app.get('/', (req: CustomRequest, res) => {
            res.json({
                message: `Hello from ${appConfig.APP_NAME}`,
                user: req?.user
            })
        })

        /** AUTH ROUTES */
        this.app.use('/api', AuthRoutes)

        /*** HANDLING 404 ROUTES */
        this.app.use('*', (_, __, next) => {
            next(new AppError('Not found', StatusCodes.NOT_FOUND))
        })

        /** HANDLING GLOBAL EXCEPTION */
        this.handleGlobalException()


        /** START SERVER */
        this.app.listen(appConfig.APP_PORT)

        /** MESSAGE - EASY FOR DEVELOPMENT */
        console.log(`Application started at http://localhost:${appConfig.APP_PORT}`)
    }

    /**
     * GLOBAL EXCEPTION HANDLER
     * @private
     */
    private handleGlobalException() {
        this.app.use(new HandleGlobalException().handler)
    }

}


export default Bootstrap
