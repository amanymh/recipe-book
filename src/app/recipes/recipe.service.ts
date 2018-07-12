import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
//selectedRecipe = new EventEmitter<Recipe>();
recipeChanged = new Subject<Recipe[]>();

  private   recipes: Recipe[] = [
        new Recipe(' Tomato Mozzarella',
        ' Describtipn of  recipe',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Meal-Food-Recipe-Tomato-Mozzarella-2624120.jpg',
      [ 
        new Ingredient('tomato',8),
        new Ingredient('Mozzarella',5)

      ]),
        new Recipe('Ashortbread',
        ' Describtipn of  recipe',
        'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_960_720.jpg',
      [
        new Ingredient('wheat',3),
        new Ingredient('alamond',5)
      ])
    
      ];
      
      constructor(private shoppingservice : ShoppingListService) {}
      
    getRecipe() {
        return this.recipes.slice();
    }
    getRecipes(index:number) {
      return this.recipes[index];
    }
    addIngredienttoShopingList(ingredients:Ingredient[]) {
  this.shoppingservice.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipre(index:number, newRecipe : Recipe) {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    
    }
    onDelete(index:number){
   this.recipes.splice(index,1);
   this.recipeChanged.next(this.recipes.slice());
    }
    
    setRecipes(recipes:Recipe[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
    }
}