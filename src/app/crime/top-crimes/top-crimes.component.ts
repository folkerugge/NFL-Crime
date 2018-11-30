import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopCrimesInterface } from './top-crimes.interface';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  _crimes: ITopCrimesInterface[];
  _filteredCrimes: ITopCrimesInterface[];
  _filterBy: any;

  constructor(private _httpClient: HttpClient) { }

  public get filterBy(): string {
    return this._filterBy;
}

public set filterBy(value: string) {
    this._filterBy = value;
    this._filteredCrimes = (this.filterBy ? this.doFiltering(this.filterBy) : this._crimes);
    let x = this._filteredCrimes;
}

doFiltering(filterBy: string): ITopCrimesInterface[]{ 
    let filteredList: ITopCrimesInterface[];

    if (this._crimes && this._crimes.length){
        filterBy = filterBy.toLocaleLowerCase();
        let x = this._crimes;
        filteredList = this._crimes.filter((crime: ITopCrimesInterface) => 
        crime.Category.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    return filteredList;
} 

  ngOnInit(){
    this._httpClient.get('http://NflArrest.com/api/v1/crime')
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
