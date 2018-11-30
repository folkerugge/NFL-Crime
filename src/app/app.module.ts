import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimesComponent } from './crime/top-crimes/top-crimes.component';
import { TopPlayersComponent } from './crime/top-players/top-players.component';
import { TopTeamsComponent } from './crime/top-teams/top-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
