import { Component } from '@angular/core'
import { ShoppingListService } from './shopping-list.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
    shoppingListService: ShoppingListService;

    constructor(shoppingListService: ShoppingListService){
        this.shoppingListService = shoppingListService;
    }
    
}