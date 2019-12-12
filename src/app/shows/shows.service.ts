import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myShows } from './shows';

@Injectable({
    providedIn: 'root'
})
export class ShowsService{

    constructor(private http: HttpClient){}

    showsUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1';
    getShows(): Observable<myShows[]>{
        return this.http.get<myShows[]>(this.showsUrl)
    }
}