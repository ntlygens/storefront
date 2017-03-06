import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http ) {
    console.log('Home Service Activated...');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

}
