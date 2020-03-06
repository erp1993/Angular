import { Component, Output, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit{
    @Output() recipe : Recipe;
    recipesService: RecipesService

    constructor(recipesService: RecipesService){
        this.recipesService = recipesService;     
    }

    ngOnInit(){
        this.recipesService.recipeListSelected.subscribe(
            (recipe: Recipe) => {
                this.recipe = recipe;
            }
        )
    }
}