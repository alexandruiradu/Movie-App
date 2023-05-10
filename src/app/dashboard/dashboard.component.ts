import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../movies.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  movieList:Array<MovieModel> = [];

constructor(private movieService:MoviesService) {
}

  ngOnInit(): void {
  this.movieList = this.movieService.getMovieList();
  this.movieService.getMovies();
  }
}
