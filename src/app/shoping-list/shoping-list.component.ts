import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
  
})
export class ShopingListComponent implements OnInit,OnDestroy {
ingregients : Ingredient[] ;
private subscribtuin:Subscription;

  constructor(private shoppinglistservice :ShoppingListService  ) { }

  ngOnInit() {
    this.ingregients = this.shoppinglistservice.getIngredients();

  this.subscribtuin=  this.shoppinglistservice.ingredientChanged
    .subscribe(
      (ingredients:Ingredient[]) =>{
        this.ingregients = ingredients;
      }
    )
  }

ngOnDestroy() {
  this.subscribtuin.unsubscribe();
}
onEditing(index:number) {
  this.shoppinglistservice.editingList.next(index);
}
}
