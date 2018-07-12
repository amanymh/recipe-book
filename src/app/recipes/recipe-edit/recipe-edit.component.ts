import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import { Params } from '@angular/Router';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
editMode = false;
id : number ;
 recipeForm: FormGroup;

  constructor(private route : ActivatedRoute,
     private recipeService : RecipeService,
   private router :Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params :Params) =>{
           this.id = +params['id'];
           this.editMode = params['id'] !=null;
           console.log(this.editMode);
           this.initForm();
      }
    );
  }
  onSubmit() {
    if(this.editMode){
      this.recipeService.updateRecipre(this.id,this.recipeForm.value)
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancel();
  }
  onCancel() {
    this. router.navigate(["../"],{relativeTo:this.route});
  }

  onDeleteIngredient(index:number){
   (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);

  }
  onAddIngredient() {
  (<FormArray> this.recipeForm.get("ingredients")).push(
     new FormGroup({
       'name':new FormControl(null,Validators.required),
       'amount': new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
       ])
     })
    );
  }

  private initForm() {
   let recipeName='';
   let recipeimagePath='';
   let recipeDescription='';
  let recipeIngredients = new FormArray([]);
   if(this.editMode){
       const recipe = this.recipeService.getRecipes(this.id);
       recipeName = recipe.name;
       recipeimagePath = recipe.imagePath;
       recipeDescription = recipe.description;
       if(recipe['ingredients']) {
         for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
             new FormGroup({
               'name': new FormControl(ingredient.name,Validators.required),
               'amount' : new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
               ])
             })
          );
         }
       }
   }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName,Validators.required),
      'description' : new FormControl(recipeDescription,Validators.required),
      'imagePath' : new FormControl(recipeimagePath,Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
