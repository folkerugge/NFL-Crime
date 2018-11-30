import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopTeamsInterface } from './top-teams.interface';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {
  _crimes: ITopTeamsInterface[];
  _filteredCrimes: ITopTeamsInterface[];

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(){
    this._httpClient.get('http://NflArrest.com/api/v1/crime/topTeams/Drugs')
     .subscribe(
         (data: any[]) => {
             if (data.length){
                 this._crimes = data;
                 this._filteredCrimes = data;
             } else {

             }  
         }
     )
 }

}
