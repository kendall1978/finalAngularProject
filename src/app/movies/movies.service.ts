import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService{

    constructor(private http: HttpClient){}

    movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1';
    getMovies(): Observable<myMovies[]>{
        return this.http.get<myMovies[]>(this.movieUrl)
    }
}