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

  constructor(private _httpClient: HttpClient) { }

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
