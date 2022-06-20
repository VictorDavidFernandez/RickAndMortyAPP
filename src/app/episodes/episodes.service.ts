import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EpisodeService {

  baseUrl: string;

  constructor(private _http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api'
   }

  getEpisodes(page: number): Observable<Episode[]>{
    return this._http.get<Episode[]>(`${this.baseUrl}/episode/?page=${page}`);
  }

  getName(name: string): Observable<Episode[]>{
    return this._http.get<Episode[]>(`${this.baseUrl}/episode/?name=${name}`);
  }
}