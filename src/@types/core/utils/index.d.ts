export interface SuccessResponseInterface<T, U> {
    success: boolean,
    message: string,
    data?: T,
    meta?: U
}

export interface FailureResponseInterface<T> {
    success: boolean,
    message: string,
    data?: T,
}
