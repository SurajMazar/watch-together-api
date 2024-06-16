import {Request} from "express";
import {users} from "@prisma/client";

export interface CustomRequest extends Request {
    user?: users
}
