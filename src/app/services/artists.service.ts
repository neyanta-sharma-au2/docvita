import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  private subject = new Subject<any>();
  constructor() {}
  getArtist() {
    return [
      {
        id: 1,
        img:
          "https://www.savingcountrymusic.com/wp-content/uploads/2014/06/tom-hiddleston.jpeg",
        rank: "#trending",
        artist: "David Guetta",
        genre: "Rap",
        followers: "200 ",
        following: "12 ",
        likes: "100 ",
        playlist: "4 "
      },
      {
        id: 2,
        img: "http://buben.fm/img/artist/256/194214.png",
        rank: "#1",
        artist: "Fabia Arke",
        genre: "Hip Hop",
        followers: "100 ",
        following: "40 ",
        likes: "40 ",
        playlist: "9 "
      },
      {
        id: 3,
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p052qvjv.jpg",
        rank: "#4",
        artist: "Nelson Cross",
        genre: "Jazz",
        followers: "250 ",
        following: "30 ",
        likes: "80 ",
        playlist: "12 "
      },
      {
        id: 4,
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p01bqh47.jpg",
        rank: "#Best Work",
        artist: "Asar Mandel",
        genre: "Slow",
        followers: "100 ",
        following: "25 ",
        likes: "300 ",
        playlist: "6 "
      }
    ];
  }
  sendMessage(artist: any) {
    this.subject.next({ artist: artist });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
