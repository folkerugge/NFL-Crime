import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimesComponent } from './crime/top-crimes/top-crimes.component';
import { TopPlayersComponent } from './crime/top-players/top-players.component';
import { TopTeamsComponent } from './crime/top-teams/top-teams.component';
import { CrimeIdsService } from './crime/shared-service/crime-ids.service'
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
{path: 'topcrimes', component: TopCrimesComponent},
{path: 'playercrimes', component: TopPlayersComponent},
{path: 'teamscrimes', component: TopTeamsComponent},
{path: '', component: TopPlayersComponent},
{path: '**', component: TopPlayersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [CrimeIdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
