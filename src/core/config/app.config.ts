import {AppConfigInterface} from "../../@types/core/config";
import {env} from "../utils/common.utils";

/**
 * APPLICATION CONFIGURATIONS
 */
const appConfig: AppConfigInterface = {
    APP_NAME: env('APP_NAME', 'watch-together'),
    JWT_SECRET: env('JWT_SECRET', 'random'),
    APP_PORT: env('APP_PORT', 2757)
}
export default appConfig
