import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


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
  private posts: Post[];

  constructor(private homeService: HomeService) {
    this.homeService.getPosts().subscribe( posts => {
      //console.log(posts);
      this.posts = posts;
    })
  }

  ngOnInit() {
    this.test = "testing works";
  }

}

interface Post{
  id: string;
  title: string;
  body: string;
}
