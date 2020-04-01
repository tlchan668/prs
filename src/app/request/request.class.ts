import { HttpClient} from '@angular/common/http';
import { User } from '../user/user.class';
import { Requestline } from '../requestline/requestline.class';


export class Request{
    id: number=0;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string = "Pickup";
    status: string = "NEW";
    total: number = 0;
    userId: number;
    user: User = null; 
    requestLines: Requestline[];     

    constructor(){}
}