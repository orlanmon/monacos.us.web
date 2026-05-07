export interface ResponseResult<T> {

    statusCode : number;
    data: T | null;

}