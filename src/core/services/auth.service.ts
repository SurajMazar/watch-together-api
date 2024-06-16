import prisma from "./prisma.service";
import HttpUnAuthorizedException from "../exception/error/HttpUnAuthorizedException";
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import appConfig from "../config/app.config";

class AuthService {

    async login(email: string, password: string) {
        const user = await prisma.users.findFirst({where: {email}})

        /** WRONG EMAIL */
        if (!user) {
            throw new HttpUnAuthorizedException('Invalid Credentials.')
        }

        const verify = await bcrypt.compare(password, user?.password)

        /** WRONG PASSWORD */
        if (!verify) {
            throw new HttpUnAuthorizedException('Invalid Credentials.')
        }

        return {
            user,
            token: jwt.sign(user, appConfig.JWT_SECRET, {expiresIn: appConfig.JWT_EXPIRY})
        }
    }
}

export default AuthService
