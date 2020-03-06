import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit{
    recipesService: RecipesService;
    recipes: Recipe[];

    constructor(recipesService: RecipesService){
        this.recipesService = recipesService;
    }

    ngOnInit(): void {
        this.recipes = this.recipesService.getRecipes();
    }
}