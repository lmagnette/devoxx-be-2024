import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-posts-loading',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    NgxSkeletonLoaderModule,
    MatCardHeader
  ],
  templateUrl: './posts-loading.component.html',
  styleUrl: './posts-loading.component.scss'
})
export class PostsLoadingComponent {

}
