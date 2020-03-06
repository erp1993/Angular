import { Component, Output, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    providers: [RecipesService]
})
export class RecipesComponent implements OnInit{
    recipesService: RecipesService;
    recipeSelected: Recipe;

    constructor(recipesService: RecipesService){
        this.recipesService = recipesService;        
    }

    ngOnInit(){
        this.recipesService.recipeListSelected.subscribe(
            (recipe: Recipe) => {
                this.recipeSelected = recipe;
            }
        )
    }
    
}