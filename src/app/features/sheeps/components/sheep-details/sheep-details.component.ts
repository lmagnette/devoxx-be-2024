import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {Sheep} from "../../models/sheep";
import {PostsComponent} from "../posts/posts.component";
import {PostsPlaceholderComponent} from "../posts-placeholder/posts-placeholder.component";
import {PostsLoadingComponent} from "../posts-loading/posts-loading.component";

@Component({
  selector: 'app-sheep-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage, PostsComponent, PostsPlaceholderComponent, PostsLoadingComponent],
  templateUrl: './sheep-details.component.html',
  styleUrl: './sheep-details.component.scss'
})
export class SheepDetailsComponent {
  @Input({required:true}) sheep!: Sheep;
}