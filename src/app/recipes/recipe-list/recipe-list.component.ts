import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/Router';
import { ActivatedRoute } from '@angular/Router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

subscription : Subscription;
  recipes: Recipe[] ;

  constructor(private recipeservice :RecipeService,
  private router:Router,
   private routes:ActivatedRoute) { }

  ngOnInit() {
   this.subscription =  this.recipeservice.recipeChanged
    .subscribe(
      (recipes:Recipe[]) =>{
         this.recipes = recipes;
      }
    )
   this.recipes = this.recipeservice.getRecipe();
  }

  onNewRecipe() {
     this.router.navigate(['new'],{relativeTo:this.routes})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
