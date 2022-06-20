import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterService {

  baseUrl: string;

  constructor(private _http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api'
   }

  getCharacters(page: number): Observable<Character[]>{
    return this._http.get<Character[]>(`${this.baseUrl}/character/?page=${page}`);
  }

  getName(name: string): Observable<Character[]>{
    return this._http.get<Character[]>(`${this.baseUrl}/character/?name=${name}`);
  }
}