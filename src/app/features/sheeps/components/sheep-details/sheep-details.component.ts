import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {Sheep} from "../../models/sheep";

@Component({
  selector: 'app-sheep-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './sheep-details.component.html',
  styleUrl: './sheep-details.component.scss'
})
export class SheepDetailsComponent {
  @Input({required:true}) sheep!: Sheep;
}