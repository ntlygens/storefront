import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    HomeService
  ]
})
export class HomeComponent implements OnInit {
  private test: string;
  private injPosts: Array<Post>;

  constructor(private homeService: HomeService) {
    this.homeService.getPosts().subscribe( (posts: Array<Post>) => {
      console.log(posts);
      this.injPosts = posts;
    })
  }

  ngOnInit() {
    this.test = 'testing works';
  }

}

interface Post {
  id: number;
  title: string;
  body: string;
}
