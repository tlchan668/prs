import { HttpClient } from '@angular/common/http'

//build model in vs
export class User {
    id: number = 0;
    username: string = '';
    password: string = 'password';
    firstname: string = "firstname";
    lastname: string = "lastname";
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor  () {}
}