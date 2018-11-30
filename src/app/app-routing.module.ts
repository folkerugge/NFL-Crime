import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopCrimesComponent } from './crime/top-crimes/top-crimes.component'
import { TopPlayersComponent } from './crime/top-players/top-players.component'
import { TopTeamsComponent } from './crime/top-teams/top-teams.component'

const routes: Routes = [{path: 'topcrimes', component: TopCrimesComponent},
{path: 'home', component: TopCrimesComponent},
{path: 'topplayers', component: TopPlayersComponent},
{path: 'topteams', component: TopTeamsComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
