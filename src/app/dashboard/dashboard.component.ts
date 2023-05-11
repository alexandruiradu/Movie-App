import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../movies.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movieList: Array<MovieModel> = [];
  selectedMovie: MovieModel = {id: "", title: "", description: "", year: "", director: ""};

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  onRefresh(): void {
    console.log("onRefresh");
    this.loadMovies();
  }

  onEdit(movie: MovieModel) {
    console.log("dashboard onEdit");
    console.log(movie);
    this.selectedMovie = movie;
  }

  private loadMovies() {
    console.log("loadMovies");
    this.movieService.getMovies().subscribe((response: any) => {
      this.movieList = response.data;
    });
  }
}
