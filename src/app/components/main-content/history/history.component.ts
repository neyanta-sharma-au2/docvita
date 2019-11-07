import { Component, OnInit } from "@angular/core";
import { History } from "../../../models/History";
@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  histories: History[];
  constructor() {}

  ngOnInit() {
    this.histories = [
      {
        img: "https://m.media-amazon.com/images/I/51PH7yF9kBL._AA256_.jpg",
        song_name: "Good Girl",
        artist: "Dustin Lynch"
      },
      {
        img:
          "https://c-sf.smule.com/sf/s27/arr/7e/c7/a21328f2-2991-439c-bfb3-66a22f1959ee.jpg",
        song_name: "Sixteen",
        artist: "Thomas Rhett"
      },
      {
        img: "https://m.media-amazon.com/images/I/61L5BlNHWWL._AA256_.jpg",
        song_name: "Undecided",
        artist: "Chris Brown"
      },
      {
        img:
          "https://c-sf.smule.com/s-sf-bck1/arr/31/08/c2925582-b24e-42db-b4a8-b775b5c6587e_256.jpg",
        song_name: "Fake Smile",
        artist: "Ariana Grande"
      }
    ];
  }
}
