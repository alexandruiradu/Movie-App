import {Component, Input} from '@angular/core';
import {MovieModel} from "../../models/movie.model";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
// @ts-ignore
  @Input() movie:MovieModel;
}
