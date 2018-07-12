import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Params } from '@angular/Router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shoping-list/shopping/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
 recipe: Recipe;

id:number;
  constructor(private recipeservice: RecipeService
     ,private shopservice :ShoppingListService,
     private route :ActivatedRoute,
     private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
      this.recipe =  this.recipeservice.getRecipes(this.id);
      }
    )

  }

  delete(){
    this.recipeservice.onDelete(this.id);
    this.router.navigate(['/recipes']);
  }
  onAddListshoping() {
//this.recipeservice.addIngredienttoShopingList(this.recipe.ingredients); 
//we can access recipeservice and inject shopingservice on it 
//or we can access shopingservice directelly..
this.shopservice.addIngredients(this.recipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
