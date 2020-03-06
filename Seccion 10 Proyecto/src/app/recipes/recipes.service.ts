import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a Test', 'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg'),
    new Recipe('A New Test Recipe', 'Simply a New Test', 'https://cookieandkate.com/images/2019/12/butternut-squash-wild-rice-recipe-2-2.jpg')
  ];
  recipeListSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
