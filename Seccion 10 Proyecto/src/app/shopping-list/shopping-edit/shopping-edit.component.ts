import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service'

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
    @ViewChild('nameInput', {static: true}) ingredientName : ElementRef;
    @ViewChild('amountInput', {static: true}) ingredientAmount : ElementRef;
    shoppingListService: ShoppingListService;

    constructor(shoppingListService: ShoppingListService){
        this.shoppingListService = shoppingListService;
    }

    onAddItem(){
        if ( this.ingredientName.nativeElement.value != "" && this.ingredientAmount.nativeElement.value != ""){
            this.shoppingListService.addIngredient(
                this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value
            )
        }
    }

    onDeleteItem(){
        if ( this.ingredientName.nativeElement.value != "" ){
            this.shoppingListService.deleteIngredient(this.ingredientName.nativeElement.value)
        }
    }

    onClearList(){
        this.shoppingListService.clearIngredientList();
    }
}