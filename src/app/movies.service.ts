import {Injectable} from '@angular/core';
import {MovieModel} from "./models/movie.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): any {
    return this.httpClient.get(
      "https://api.codebyte-software.com:2323/api/movie"
    )
  }

  addMovie(movie: MovieModel)  {
    let body = {
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.post(
      "https://api.codebyte-software.com:2323/api/movie", body
    )
  }

  updateMovie(movie: MovieModel)  {
    let body = {
      "id":movie.id,
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.patch(
      `https://api.codebyte-software.com:2323/api/movie/${movie.id}`, body
    )
  }

  deleteMovie(movieId: string) {
    return this.httpClient.delete(
      `https://api.codebyte-software.com:2323/api/movie/${movieId}`
    )
  }
}
