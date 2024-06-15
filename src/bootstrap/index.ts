import express, {Express} from "express";
import appConfig from "../core/config/app.config";

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
        this.app.listen(appConfig.APP_PORT)
        console.log(`Application started at http://localhost:${appConfig.APP_PORT}`)
    }

}


export default Bootstrap
