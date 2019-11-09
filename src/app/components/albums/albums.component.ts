import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AlbumsService } from "../../services/albums.service";
import { Album } from "../../models/Album";
@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(
    private service: AlbumsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    //when fetching larger file hide after fetched
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.service.getAlbums().subscribe(albums => {
      this.albums = albums;
      console.log(this.albums);
    });
  }
}
