export interface User {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
}

export type Users = User[];

export interface UsersRespose {
    users: Users;
}