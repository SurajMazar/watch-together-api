// import BaseMiddleware from "./base.middleware";
// import {NextFunction, Request, Response} from "express";
// import {StatusCodes} from "http-status-codes";
// import * as jwt from 'jsonwebtoken'
// import appConfig from "../../core/config/app.config";
// import prisma from "../../core/services/prisma.service";
// import {users} from '@prisma/client'
// import {CustomRequest} from "../../@types/http/middleware";
//
// /**
//  *
//  * @param req
//  * @private
//  */
// const getTokenFromHeader = (req: Request) => {
//     if (req?.headers?.authorization) {
//         const authorization = req?.headers?.authorization?.split('Bearer ')
//         return authorization && authorization?.length > 1 && authorization[1] ? authorization[1] : null
//     }
//     return null
// }
//
// /**
//  * VALIDATE TOKEN
//  * @param token
//  */
// const validateToken = async (token: string) => {
//     return jwt.verify(token, appConfig.JWT_SECRET);
// }
//
// class AuthMiddleware extends BaseMiddleware {
//     /**
//      *
//      * @param req
//      * @param res
//      * @param next
//      */
//     public async handle(req: CustomRequest, res: Response, next: NextFunction) {
//         try {
//             const token = getTokenFromHeader(req)
//             if (token) {
//                 const decoded = await validateToken(token) as users
//                 if (decoded) {
//                     const user = await prisma.users.findFirst({where: {id: decoded?.id}})
//
//                     if (user) {
//                         req.user = user
//                         next()
//                     }
//                 }
//             }
//         } catch (exception) {
//             return res.status(StatusCodes.BAD_REQUEST).json({message: 'Something went wrong.'})
//         }
//         return res.status(StatusCodes.UNAUTHORIZED).json({message: 'Unauthorized'})
//     }
//
// }
//
// export default AuthMiddleware
