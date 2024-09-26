import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-posts-placeholder',
  standalone: true,
  imports: [
    MatCardFooter,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatCardHeader
  ],
  templateUrl: './posts-placeholder.component.html',
  styleUrl: './posts-placeholder.component.scss'
})
export class PostsPlaceholderComponent {

}
