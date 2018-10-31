import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import {Users} from '../models/User';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor(public http:HttpClient ) { }

  userData():Observable<Users[]>{
   return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }



   addData(user):Observable<Users[]> {
    return this.http.post<Users[]>('https://jsonplaceholder.typicode.com/users',user);
   }

   adddelte(id){
    return this.http.delete('http://jsonplaceholder.typicode.com/users',id);
         
   }

   updateUser(user){
    return this.http.put('http://jsonplaceholder.typicode.com/users/'+user.id, user)
       
}

}
