import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../../services/albums.service";
import { Album } from "../../models/Album";
@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private service: AlbumsService) {}

  ngOnInit() {
    this.service.getAlbums().subscribe(albums => {
      this.albums = albums;
      console.log(this.albums);
    });
  }
}
