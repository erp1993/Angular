import { Component, ViewChild, ElementRef } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
    
    ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Banana", 10),
        new Ingredient("Tomato", 10)
    ];

    constructor(){}

    
}