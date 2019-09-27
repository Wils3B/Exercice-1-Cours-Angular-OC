import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../model/Post';

@Injectable()
export class PostService {
  postsSubject = new Subject<any[]>();

  posts: Post[] = [
    new Post('Voix sur IP',  'La voix sur IP, ou « VoIP » pour Voice over IP, est une technique qui permettait à l\'origine de transmettre la voix sur des réseaux IP filaires (câble/ADSL/fibre optique) ou non (satellite, Wi-Fi, GSM, UMTS ou LTE), qu\'il s\'agisse de réseaux privés ou d\'Internet.\n\nLongtemps confinés au transport de la voix, certains logiciels de VoIP tels que Skype diffusent aujourd’hui les appels vidéo ainsi que la messagerie instantanée et permettent également de transmettre des fichiers. De nouvelles applications, plus rapides et plus performantes, sont nées pour gérer simultanément tous les flux multimédia : Facebook Messenger, WhatsApp, Snapchat ou Discord1,2.\n\nEn ce qui concerne la téléphonie uniquement, cette technologie est complémentaire de la téléphonie sur IP (« ToIP » pour Telephony over Internet Protocol), qui concerne les fonctions réalisées par un autocommutateur téléphonique IPBX. ',41),
    new Post('L\'univers', 'L\'Univers est l\'ensemble de tout ce qui existe, régi par un certain nombre de lois.\n\nLa cosmologie cherche à appréhender l\'Univers d\'un point de vue scientifique, comme l\'ensemble de la matière distribuée dans l\'espace-temps. Pour sa part, la cosmogonie vise à établir une théorie de la création de l\'Univers sur des bases philosophiques ou religieuses. La différence entre ces deux définitions n\'empêche pas nombre de physiciens d\'avoir une conception finaliste de l\'Univers (voir à ce sujet le principe anthropique).\n\nSi l\'on veut faire correspondre le mouvement des galaxies avec les lois physiques telles qu\'on les conçoit actuellement, on peut considérer que l\'on n\'accède par l\'expérience qu\'à une faible partie de la matière de l\'Univers1, le reste se composant de matière noire. Par ailleurs, pour expliquer l\'accélération de l\'expansion de l\'Univers, il faut également introduire le concept d\'énergie sombre. Plusieurs modèles alternatifs ont été proposés pour faire correspondre les équations et nos observations en prenant d\'autres approches. ',22)
  ];

  constructor() {}

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostSubject();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();

    console.log(this.posts);
  }

  getNumberOfLikes() {
    let count = 0;
    this.posts.forEach(p => {
      if (p.loveIts > 0) { count += p.loveIts; }
    });
    return count;
  }

  getNumberOfDislikes() {
    let count = 0;
    this.posts.forEach(p => {
      if (p.loveIts < 0) { count -= p.loveIts; }
    });
    return count;
  }

  getNumberOfPositives() {
    let count = 0;
    this.posts.forEach(p => {
      if (p.loveIts > 0) { count += 1; }
    });
    return count;
  }

  getNumberOfNegatives() {
    let count = 0;
    this.posts.forEach(p => {
      if (p.loveIts < 0) { count += 1; }
    });
    return count;
  }

  getNumberOfNulls() {
    let count = 0;
    this.posts.forEach(p => {
      if (p.loveIts === 0) { count += 1; }
    });
    return count;
  }

  getNumberOfPost() {
    return this.posts.length;
  }
}
