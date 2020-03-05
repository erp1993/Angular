import { Injectable, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class ShoppingListService {
  @Output() ingredients = new Map();
  @Output() shoppingListChanged = new EventEmitter<void>();

  constructor() {
    this.ingredients.set("Apple", 5);
    this.ingredients.set("Banana", 10);
    this.ingredients.set("Tomato", 10);
   }

   addIngredient(name: string, amount: number) {
     this.ingredients.set(name, amount);
     this.shoppingListChanged.emit();
   }

   deleteIngredient(name: string){
     this.ingredients.delete(name);
   }

   clearIngredientList(){
     this.ingredients.clear();
   }
}
