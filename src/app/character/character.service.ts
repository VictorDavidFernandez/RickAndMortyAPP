import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../characters/character';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterService {

  constructor(private _http: HttpClient) { }

  getCharacter(id: number): Observable<Character>{
    return this._http.get<Character>("https://rickandmortyapi.com/api/character/" + id);
  }
}