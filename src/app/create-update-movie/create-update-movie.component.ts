import {Component, Version} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

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
}
