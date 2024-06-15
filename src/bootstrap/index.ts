import express, {Express} from "express";
import appConfig from "../core/config/app.config";
import HandleGlobalException from "../core/exception/handler";

class Bootstrap {
    protected app: Express;

    constructor() {
        this.app = express()
    }

    init() {
        this.serverInit()
    }

    private serverInit() {

        this.app.get('/', (_, res) => {
            res.json({
                message: `Hello from ${appConfig.APP_NAME}`
            })
        })

        /**
         * HANDLING GLOBAL EXCEPTION
         */
        this.handleGlobalException()

        /**
         * HANDLING 404 ROUTES
         */
        this.app.use('*', (_, res) => {
            res.json({
                message: 'Not found.'
            })
        })

        /**
         * START SERVER
         */
        this.app.listen(appConfig.APP_PORT)

        /**
         * MESSAGE - EASY FOR DEVELOPMENT
         */
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
