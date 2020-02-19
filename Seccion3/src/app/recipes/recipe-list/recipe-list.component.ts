import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Simply a Test', 'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg'),
        new Recipe('A New Test Recipe', 'Simply a New Test', 'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg')
    ];

    constructor(){}
}