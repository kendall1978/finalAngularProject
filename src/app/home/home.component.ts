import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    pageTitle: string = "The Real-list Cinema";
    pageDiscription: string = "Browse our site to find movies now playing and popular TV shows.";
}