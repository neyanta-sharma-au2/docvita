import { Component, OnInit } from "@angular/core";
import { Music } from "../../../models/Music";
@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"]
})
export class MusicComponent implements OnInit {
  musics: Music[];
  constructor() {}

  ngOnInit() {
    this.musics = [
      {
        img: "https://m.media-amazon.com/images/I/51gZ-n41nIL._AA256_.jpg",
        song_name: "Lorde-Melodrama",
        genre: "Pop Music"
      },
      {
        img:
          "https://halloweencarols.com/sites/default/files/imagecache/album_cover/Kristen%20cover%203000%20for%20CD%20Baby%209%2020_0.jpg",
        song_name: "High Hopes",
        genre: "Hip Hop"
      },
      {
        img:
          "https://i.pinimg.com/originals/ca/87/42/ca8742ec9b47c9ced253129c059f79dc.jpg",
        song_name: "YoungBlood",
        genre: "Pop Music"
      },
      {
        img:
          "https://upload.wikimedia.org/wikipedia/en/7/76/The_Best_Thing_About_Me_Is_You_%28Ricky_Martin_single_-_cover_art%29.jpg",
        song_name: "Leave Me alone",
        genre: "Hip Hop"
      },
      {
        img:
          "https://at-cdn-s02.audiotool.com/2018/03/24/documents/fiscmh5y/0/cover256x256-23d7c5cf7deb447ea8835d81c13f8fa5.jpg",
        song_name: "Sweet But Psycho",
        genre: "Pop Music"
      }
    ];
  }
}
