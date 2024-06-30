import Fastify, {FastifyInstance} from 'fastify'
import appConfig from "../core/config/app.config";
import authRoutes from "../http/routes/api/auth.routes";

class Bootstrap {
    protected fastifyApp: FastifyInstance

    constructor() {
        this.fastifyApp = Fastify({
            logger: true
        })
    }

    async init() {
        this.serverInit()
        await this.startServer()
    }

    private serverInit() {
        this.fastifyApp.get('/', (request, reply) => {
            return reply.send({
                message: "Hello from fastify."
            })
        })

        this.fastifyApp.register(authRoutes, {prefix: '/api/auth'})
    }

    /**
     * GLOBAL EXCEPTION HANDLER
     * @private
     */
    private handleGlobalException() {
        // this.app.use(new HandleGlobalException().handler)
    }

    /**
     * START THE FASTIFY SERVER
     * @private
     */
    private async startServer() {
        try {
            const address = await this.fastifyApp.listen({
                port: appConfig.APP_PORT
            })
            this.fastifyApp.log.info(`server listening on ${address}`)
        } catch (exception) {
            this.fastifyApp.log.error(exception)
            process.exit(1)
        }
    }

}


export default Bootstrap
