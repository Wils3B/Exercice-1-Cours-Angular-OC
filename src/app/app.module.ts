import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import {FormsModule} from '@angular/forms';
import { PostStatsComponent } from './post-stats/post-stats.component';

const appRoutes: Routes = [
  {path: 'post',  component: PostListComponent},
  {path: 'new',  component: NewPostComponent},
  {path: '',  component: NewPostComponent},
  {path: '**', redirectTo: 'post'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostStatsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
