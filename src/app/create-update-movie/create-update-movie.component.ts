import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, Version} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieModel} from "../models/movie.model";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-create-update-movie',
  templateUrl: './create-update-movie.component.html',
  styleUrls: ['./create-update-movie.component.css']
})
export class CreateUpdateMovieComponent implements OnChanges {

  @Input() movie: MovieModel = {id: "", title: "", description: "", year: "", director: ""};
  @Output() createMovie: EventEmitter<any> = new EventEmitter();
  @Output() updateMovie: EventEmitter<any> = new EventEmitter();

  title: FormControl<string | null> = new FormControl("", [Validators.required]);
  description: FormControl<string | null> = new FormControl("", [Validators.required]);
  year: FormControl<string | null> = new FormControl("", [Validators.required]);
  director: FormControl<string | null> = new FormControl("", [Validators.required]);

  constructor(private movieService: MoviesService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("create-update component");
    console.log(this.movie);
    if (this.movie.id != "") {
      this.title = new FormControl(this.movie.title, [Validators.required]);
      this.description = new FormControl(this.movie.description, [Validators.required]);
      this.year = new FormControl(this.movie.year, [Validators.required]);
      this.director = new FormControl(this.movie.director, [Validators.required]);
    }
  }

  onSave(): void {
    let movieItem: MovieModel = {
      id: this.movie.id,
      title: this.title.getRawValue()!,
      description: this.description.getRawValue()!,
      year: this.year.getRawValue()!,
      director: this.director.getRawValue()!
    }
    console.log(movieItem);
    if (movieItem.id == "") {
      this.movieService.addMovie(movieItem).subscribe((response: any) => {
        console.log(response);
        this.createMovie.emit();
      });
    } else {
      this.movieService.updateMovie(movieItem).subscribe((response: any) => {
        console.log(response);
        this.updateMovie.emit();
      });
    }

  }

  onClearForm(): void {
    this.movie = {id: "", title: "", description: "", year: "", director: ""};
    this.title = new FormControl("", [Validators.required]);
    this.description = new FormControl("", [Validators.required]);
    this.year = new FormControl("", [Validators.required]);
    this.director = new FormControl("", [Validators.required]);
  }

}
