import {Schema} from 'joi'

/**
 *
 * @param validator
 * @constructor
 */
export const ValidatorCompiler = (validator: { schema: Schema }) => {
    return (data: Record<string, unknown>) => {
        const {error, value} = validator.schema.validate(data, {abortEarly: false});
        if (error) {
            throw {...error, validation: error?.details}
        }
        return value
    }
}
