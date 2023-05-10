import { Injectable } from '@angular/core';
import {MovieModel} from "./models/movie.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private movieList:Array<MovieModel> = [];
  constructor(private httpClient:HttpClient) {
  }
  getMovieList():Array<MovieModel> {
    return this.movieList;
  }
  addMovieToList(movie:MovieModel):void {
    this.movieList.push(movie);
    console.log(this.movieList);
  }
  getMovies():any {
    this.httpClient.get(
      "https://api.codebyte-software.com:2323/api/movie"
    ).subscribe((response:any) => {
      console.log(response);
      console.log(response.data);
      let movies = response.data;
      for (let movie of movies){
        this.movieList.push(movie);
      }
      console.log(this.movieList);
    })
  }
  addMovie(movie:MovieModel):void{
    let body = {
      "title": movie.title,
      "description":movie.description,
      "year":movie.year,
      "director": movie.director
    }
    this.httpClient.post(
      "https://api.codebyte-software.com:2323/api/movie",body
    ).subscribe((response:any) => {
      console.log(response);
      this.movieList.push(response.data);
    })
  }
}
