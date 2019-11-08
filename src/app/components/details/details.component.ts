import { Component, OnInit } from "@angular/core";
import { Artist } from "../../models/Artist";
import { ArtistsService } from "../../services/artists.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  artist: any = [];
  subscription: Subscription;
  artists: Artist[];
  constructor(private artistsService: ArtistsService) {
    this.subscription = this.artistsService.getMessage().subscribe(artist => {
      this.artist = artist;
      console.log(artist);
    });
  }

  ngOnInit() {
    this.artists = this.artistsService.getArtist();
  }
}
