import {Component, Version} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieModel} from "../models/movie.model";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-create-update-movie',
  templateUrl: './create-update-movie.component.html',
  styleUrls: ['./create-update-movie.component.css']
})
export class CreateUpdateMovieComponent {
  title: FormControl<string | null> = new FormControl("", [Validators.required]);
  description: FormControl<string | null> = new FormControl("", [Validators.required]);
  year: FormControl<string | null> = new FormControl("", [Validators.required]);
  director: FormControl<string | null> = new FormControl("", [Validators.required]);

  constructor(private movieService:MoviesService) {
  }
  onSave():void {
    let movieItem:MovieModel = {
      id:"",
      title:this.title.getRawValue()!,
      description:this.description.getRawValue()!,
      year:this.year.getRawValue()!,
      director:this.director.getRawValue()!
    }
    console.log(movieItem);
    //this.movieService.addMovieToList(movieItem);
    this.movieService.addMovie(movieItem);
  }

}
