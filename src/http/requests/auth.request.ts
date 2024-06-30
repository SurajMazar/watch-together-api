import Joi from "joi";

export const LoginRequestSchema = {
    schema: {
        body: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().min(6)
        }).required(),

    }
}
