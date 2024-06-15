import dotenv from 'dotenv'

/**
 * INITIALIZING DOT ENV
 */
dotenv.config()

/**
 * RETRIEVE ENV VARIABLE
 * @param key
 * @param defaultValue
 */
type EnvDefaultValue = string | number | boolean | null;
export function env<T extends EnvDefaultValue>(key: string, defaultValue: T): T;
export function env<T extends EnvDefaultValue>(key: string): T | null;
export function env<T extends EnvDefaultValue>(key: string, defaultValue: T | null = null): T | null {
    const value = process.env[key];

    if (value === undefined || value === null) {
        return defaultValue;
    }

    // Type casting for number and boolean
    if (typeof defaultValue === 'number') {
        const numValue = Number(value);
        return (isNaN(numValue) ? defaultValue : numValue) as T;
    }
    if (typeof defaultValue === 'boolean') {
        return (value === 'true') as T;
    }

    return value as T;
}
