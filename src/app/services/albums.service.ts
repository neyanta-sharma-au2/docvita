import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Album } from "../models/Album";
@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  albumsUrl: string = "https://jsonplaceholder.typicode.com/photos?_limit=5";

  constructor(private http: HttpClient) {}
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }
}
