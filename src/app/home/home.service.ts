import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient ) {
    console.log('Home Service Activated...');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
