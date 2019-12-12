import { Component, OnInit } from '@angular/core';
import { myShows } from '../shows/shows';
import { myMovies } from '../movies/movies';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    pageTitle: string = "The Real-list Cinema";
    pageDiscription: string = "Browse our site to find movies now playing and popular TV shows.";
    shows: myShows[] = [ ];
    movies: myMovies[] = [ ];

    constructor(private HomeService: HomeService){
        this.HomeService.getShows().subscribe(showObserved =>{
            this.shows = showObserved;
        });
        this.HomeService.getMovies().subscribe(movieObserved =>{
            this.movies = movieObserved;
        });
    }
}