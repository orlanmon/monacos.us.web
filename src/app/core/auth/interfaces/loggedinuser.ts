export interface LoggedInUser {

    userName: string;
    token?: string;
    userID: number;
    userRoles: number[];
}