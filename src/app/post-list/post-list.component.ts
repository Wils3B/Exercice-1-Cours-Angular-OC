import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../model/Post';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

  posts: any[];
  postSubscription:Subscription;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription=this.postService.postsSubject.subscribe(
      (posts:any[])=>{
        this.posts=posts
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
