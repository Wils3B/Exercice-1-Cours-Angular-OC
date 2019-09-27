import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  getNumberOfLikes() {
    return this.postService.getNumberOfLikes();;
  }

  getNumberOfDislikes() {
    return this.postService.getNumberOfDislikes();
  }

  getNumberOfPositives() {
    return this.postService.getNumberOfPositives();
  }

  getNumberOfNegatives() {
    return this.postService.getNumberOfNegatives();
  }

  getNumberOfNulls() {
    return this.postService.getNumberOfNulls();
  }

  getNumberOfPost(){
    return this.postService.getNumberOfPost();
  }

}
