import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
    @ViewChild('nameInput', {static: true}) ingredientName : ElementRef;
    @ViewChild('amountInput', {static: true}) ingredientAmount : ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        if ( this.ingredientName.nativeElement.value != "" && this.ingredientAmount.nativeElement.value != ""){
            this.ingredientAdded.emit(
                new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value)
            )
        }
    }
}