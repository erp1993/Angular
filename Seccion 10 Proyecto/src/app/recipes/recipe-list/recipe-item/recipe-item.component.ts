import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../recipes.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipeItem : Recipe;
    private recipesService: RecipesService;

    constructor(recipeService: RecipesService){
        this.recipesService = recipeService;
    }

    onRecipeSelected() {
        this.recipesService.recipeListSelected.emit(this.recipeItem);;
    }

}