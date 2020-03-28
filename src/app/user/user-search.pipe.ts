import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[] {
    if(searchCriteria === '') return users;
    let criteria = searchCriteria.toLowerCase();
    let selUsers: User[]=[];
    for( let user of users){
      
      if(user.username.toLowerCase().includes(criteria)){
        selUsers.push(user);
        continue;
      }
      if(user.firstname.toLowerCase().includes(criteria)){
        selUsers.push(user);
        continue;
      }
      if(user.lastname.toLowerCase().includes(criteria)){
        selUsers.push(user);
        continue;
      }
      if(user.email != null && user.email.toLowerCase().includes(criteria)){
        selUsers.push(user);
        continue;
      }
      if(user.phone != null && user.phone.toLowerCase().includes(criteria)){
        selUsers.push(user);
        continue;
      }
    }
    return selUsers;
  }

}
