import { Component, OnInit } from "@angular/core";
import { Tracks } from "../../../models/Tracks";

@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.css"]
})
export class TracksComponent implements OnInit {
  tracks: Tracks[];
  constructor() {}

  ngOnInit() {
    this.tracks = [
      {
        img: "https://i.scdn.co/image/ab67616d0000b273d7b6f0f1fb7d19ed0349af09",
        song_name: "Lorde",
        artist: "Chris Stapleton",
        duration: 3.12
      },
      {
        img:
          "https://aimg.vibbidi-vid.com/vibbidi-images/albums/807127996865873.256x.jpg",
        song_name: "Pure Water",
        artist: "Mustard ",
        duration: 2.12
      },
      {
        img:
          "https://i.pinimg.com/474x/21/36/ba/2136ba59ba9e46f059f2508b64cbfe1e.jpg",
        song_name: "Needy",
        artist: "Ariana Grande",
        duration: 2.43
      }
    ];
  }
}
