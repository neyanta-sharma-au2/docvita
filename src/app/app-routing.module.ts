import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: MainComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  MainComponent,
  AlbumsComponent,
  PageNotFoundComponent
];
