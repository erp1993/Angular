import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../../recipe.model'

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipeItem : Recipe;
    @Output() recipeSelected = new EventEmitter<void>();

    onRecipeSelected(recipe: Recipe) {
        this.recipeSelected.emit();
    }

}