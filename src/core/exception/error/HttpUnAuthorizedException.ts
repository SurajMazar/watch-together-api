import {StatusCodes} from "http-status-codes";

class HttpUnAuthorizedException extends Error {
    statusCode = StatusCodes.UNAUTHORIZED
    message = "Unauthorized"

    constructor(message: string | null = null) {
        super();
        if (message) {
            this.message = message;
        }
    }
}


export default HttpUnAuthorizedException
