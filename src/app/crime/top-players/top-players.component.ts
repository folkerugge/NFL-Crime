import { Component, OnInit } from '@angular/core';
import { ITopPlayersInterface } from './top-players.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  _crimes: ITopPlayersInterface[];
  _filteredCrimes: ITopPlayersInterface[];
  _filterBy: string;

  constructor(private _httpClient: HttpClient) { }

  public get filterBy(): string {
    return this._filterBy;
}

  public set filterBy(value: string) {
    this._filterBy = value;
    this._filteredCrimes = (this.filterBy ? this.doFiltering(this.filterBy) : this._crimes);
}

doFiltering(filterBy: string): ITopPlayersInterface[]{ 
    let filteredList: ITopPlayersInterface[];

    if (this._crimes && this._crimes.length){
        filterBy = filterBy.toLocaleLowerCase();
        filteredList = this._crimes.filter((crime: ITopPlayersInterface) => 
        crime.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    return filteredList;
} 

  ngOnInit(){
    this._httpClient.get('http://NflArrest.com/api/v1/crime/topPlayers/Drugs')
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
