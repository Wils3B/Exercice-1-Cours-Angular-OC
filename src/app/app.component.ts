import { Component } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post('Mon Premier post', 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.'),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.'),
    new Post('Un autre post', 'Lorem ipsum dolor sit accumsan interdum nisi' +
      ', quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum')
  ];
}
