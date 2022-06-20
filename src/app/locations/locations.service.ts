import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

  baseUrl: string;

  constructor(private _http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api'
   }

  getLocations(page: number): Observable<Location[]>{
    return this._http.get<Location[]>(`${this.baseUrl}/location/?page=${page}`);
  }

  getName(name: string): Observable<Location[]>{
    return this._http.get<Location[]>(`${this.baseUrl}/location/?name=${name}`);
  }
}