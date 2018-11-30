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
  _filterBy: string;

  constructor(private _httpClient: HttpClient) {}

  public get filterBy(): string {
    return this._filterBy;
}

  public set filterBy(value: string) {
    this._filterBy = value;
    this._filteredCrimes = (this.filterBy ? this.doFiltering(this.filterBy) : this._crimes);
}

  doFiltering(filterBy: string): ITopTeamsInterface[]{ 
    let filteredList: ITopTeamsInterface[];

    if (this._crimes && this._crimes.length){
        filterBy = filterBy.toLocaleLowerCase();
        let x = this._crimes;
        filteredList = this._crimes.filter((crime: ITopTeamsInterface) => 
        crime.Team.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    return filteredList;
} 

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
