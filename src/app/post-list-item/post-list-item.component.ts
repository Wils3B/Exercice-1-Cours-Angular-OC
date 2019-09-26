import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.post.incrementLovesIt();
  }

  onDislike() {
    this.post.decrementLovesIt();
  }

  absolute(a:number):number{
    return Math.abs(a);
  }

}
