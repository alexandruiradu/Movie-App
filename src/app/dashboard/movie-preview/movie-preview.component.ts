import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {MoviesService} from "../../movies.service";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
// @ts-ignore
  @Input() movie: MovieModel;
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter();
  @Output() editMovie: EventEmitter<MovieModel> = new EventEmitter();

  constructor(private movieService: MoviesService) {
  }

  onDelete(): void {
    console.log(this.movie.id);
    this.movieService.deleteMovie(this.movie.id).subscribe((response:any) => {
      console.log(response);
      this.deleteMovie.emit();
    })

  }

  onEdit(): void {
    console.log(this.movie);
    this.editMovie.emit(this.movie);
  }
}
