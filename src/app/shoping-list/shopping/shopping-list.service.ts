//import { EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from "rxjs/Subject";




export class ShoppingListService {
  editingList = new Subject<number>();
  //  newingredient = new EventEmitter<Ingredient[]>();
ingredientChanged = new Subject<Ingredient[]>();
   private  ingredients : Ingredient[] = [
        new Ingredient('Apple',4),
        new Ingredient('tomato',7)
      ];
     
      getIngredients() {
          return this.ingredients.slice();
      }
    getIngredient(index:number) {
      return this.ingredients[index];
    }

      addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredient:Ingredient[]) {
        // for (let ingredient of ingregients ){
        //   this.addIngredient(ingredient)

        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
        }
     
      updateIngredient(index:number,newIngredient:Ingredient){
           this.ingredients[index] = newIngredient;
           this.ingredientChanged.next(this.ingredients.slice());
      }

      deletedIngredient(index:number) {
         this.ingredients.splice(index,1);
         this.ingredientChanged.next(this.ingredients.slice());
      }
}
