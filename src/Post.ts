
export class Post {
  private _titre: string;
  private _content: string;
  private _loveIts: number;
  private _create_at: Date;


  constructor(titre: string, content: string) {
    this._titre = titre;
    this._content = content;
    this._loveIts = 0;
    this._create_at = new Date();
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  get create_at(): Date {
    return this._create_at;
  }

  incrementLovesIt() {
    this._loveIts++;
  }

  decrementLovesIt() {
    this._loveIts--;
  }
}
