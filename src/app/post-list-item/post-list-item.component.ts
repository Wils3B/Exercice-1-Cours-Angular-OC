import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/Post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  onLike() {
    this.post.incrementLovesIt();
  }

  onDislike() {
    this.post.decrementLovesIt();
  }

  absolute(a: number): number {
    return Math.abs(a);
  }

  onDelete(){
    this.postService.removePost(this.index);
  }

}
