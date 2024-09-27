import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SheepSummaryCardComponent} from "../sheep-summary-card/sheep-summary-card.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SheepService} from "../../services/sheep.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {MatSnackBar} from "@angular/material/snack-bar"; // Import Angular Material Card module


@Component({
    selector: 'app-sheep-list',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        NgOptimizedImage,
        SheepSummaryCardComponent,
        MatSuffix,
        MatFormField,
        MatInput,
        FormsModule,
        MatIcon,
        MatLabel,
        MatIconButton
    ], // Standalone component with Angular Material
    templateUrl: './sheep-list.component.html',
    styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent implements OnInit {
    // Using Angular signals to manage the sheep list reactively
    service = inject(SheepService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    sheepList = toSignal(this.service.list(), {initialValue:[]});
    searchValue = signal<string>('');
    sheepFilteredList = computed(() => this.sheepList().filter( s => s.name.toUpperCase().includes(this.searchValue().toUpperCase())));


    ngOnInit(): void {
    }

    likeChanged(likes:number){
            if(likes > 0){
                this._snackBar.open(`like count is ${likes} likes`);
            }

    }
}