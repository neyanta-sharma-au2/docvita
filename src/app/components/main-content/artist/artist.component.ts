import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Artist } from "../../../models/Artist";
import { ArtistsService } from "../../../services/artists.service";
@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  artists: Artist[];
  @Output() public childEvent = new EventEmitter();
  constructor(private artistsService: ArtistsService) {}

  ngOnInit() {
    this.artists = this.artistsService.getArtist();
  }
  sendMessage(artist): void {
    this.artistsService.sendMessage(artist);
    console.log(`from sendMessage ${artist}`);
  }
  clickEvent(artist) {
    this.childEvent.emit(artist);
    console.log(`from artist ${artist}`);
  }
}
