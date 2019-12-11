import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service'; 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{
  pageTitle: string = "Movies Now Playing";
  pageDiscription: string = "Browse some movies that are playing now. Don't forget to read the discription and find out which ones you like!";
  movies: myMovies[] = [ ];
  constructor(private MoviesService: MoviesService) {
    this.MoviesService.getMovies().subscribe(movieObserved =>{
      this.movies = movieObserved;
      console.log(this.movies);
    })
  }


}
