import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { MusicComponent } from "./components/main-content/music/music.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { TracksComponent } from "./components/main-content/tracks/tracks.component";
import { HistoryComponent } from "./components/main-content/history/history.component";
import { ArtistComponent } from './components/main-content/artist/artist.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    MusicComponent,
    TracksComponent,
    HistoryComponent,
    ArtistComponent,
    MainComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
