import { Component, Output } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipesService: RecipesService;

    constructor(recipesService: RecipesService){
        this.recipesService = recipesService;
    }

}