import { Component, OnInit } from '@angular/core';
import { myShows } from './shows';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent{
  pageTitle: string = "Popular Tv Shows";
  pageDiscription: string = "Browse some shows that are popular right now. Don't forget to read the discription and find out which ones you like!";
  shows: myShows[] = [ ];
  constructor(private ShowsService: ShowsService) {
    this.ShowsService.getShows().subscribe(showObserved =>{
      this.shows = showObserved;
      console.log(this.shows);
    })
  }

}
