import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Post} from '../model/Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService,private router:Router) {}

  isSubmit = false;
  titrePost=""
  contenuPost=""

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.isSubmit = true;
    if (form.valid) {
      this.postService.addPost(new Post(this.titrePost, this.contenuPost));
      form.reset();
      this.isSubmit = false;
      this.router.navigate(['/post']);
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    const thing: string = state.path || thingName;
    const messages: string[] = [];
    if (state.errors) {
      for (const errorName in state.errors) {
        if (errorName === 'required') {
            messages.push(`Vous devez saisir un ${thing}`);
        }
      }
    }
    return messages;
  }

  getFormValidationMessages(form: NgForm): string[] {
    const messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k)
        .forEach(m => messages.push(m));
    });
    return messages;
  }

}
