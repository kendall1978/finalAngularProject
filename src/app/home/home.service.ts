import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myShows } from '../shows/shows';
import { myMovies } from '../movies/movies';

@Injectable({
    providedIn: 'root'
})
export class HomeService{

    constructor(private http: HttpClient){}

    showsUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1';
    getShows(): Observable<myShows[]>{
        return this.http.get<myShows[]>(this.showsUrl)
    }

    movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1';
    getMovies(): Observable<myMovies[]>{
        return this.http.get<myMovies[]>(this.movieUrl)
    }


}