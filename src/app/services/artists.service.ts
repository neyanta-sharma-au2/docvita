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
        followers: "200 Followers",
        following: "12 Following",
        likes: "100 Likes",
        playlist: "4 Playlist"
      },
      {
        id: 2,
        img: "http://buben.fm/img/artist/256/194214.png",
        rank: "#1",
        artist: "Fabia Arke",
        genre: "Hip Hop",
        followers: "100 Followers",
        following: "40 Following",
        likes: "40 Likes",
        playlist: "9 Playlist"
      },
      {
        id: 3,
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p052qvjv.jpg",
        rank: "#4",
        artist: "Nelson Cross",
        genre: "Jazz",
        followers: "250 Followers",
        following: "30 Following",
        likes: "80 Likes",
        playlist: "12 Playlist"
      },
      {
        id: 4,
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p01bqh47.jpg",
        rank: "#Best Work",
        artist: "Asar Mandel",
        genre: "Slow",
        followers: "100 Followers",
        following: "25 Following",
        likes: "300 Likes",
        playlist: "6 Playlist"
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
