import { Component, OnInit } from "@angular/core";
import { Artist } from "../../../models/Artist";
@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  artists: Artist[];
  constructor() {}

  ngOnInit() {
    this.artists = [
      {
        img:
          "https://www.savingcountrymusic.com/wp-content/uploads/2014/06/tom-hiddleston.jpeg",
        rank: "#trending",
        artist: "David Guetta",
        genre: "Rap",
        followers: 200,
        following: 12,
        likes: 100,
        playlist: 4
      },
      {
        img: "http://buben.fm/img/artist/256/194214.png",
        rank: "#1",
        artist: "Fabia Arke",
        genre: "Rap",
        followers: 200,
        following: 12,
        likes: 100,
        playlist: 4
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p052qvjv.jpg",
        rank: "#4",
        artist: "Nelson Cross",
        genre: "Rap",
        followers: 200,
        following: 12,
        likes: 100,
        playlist: 4
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/256x256/p01bqh47.jpg",
        rank: "#Best Work",
        artist: "Asar Mandel",
        genre: "Rap",
        followers: 200,
        following: 12,
        likes: 100,
        playlist: 4
      }
    ];
  }
}
