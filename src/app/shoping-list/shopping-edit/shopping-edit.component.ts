import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
// @ViewChild('nameInput') nameInputRef : ElementRef ;
// @ViewChild('amountInput') amouneInputRef : ElementRef ;
@ViewChild('f') slEdit : NgForm;
editingItemNumber :number;
editingItem:Ingredient;
editMode = false;
subscribtion : Subscription;
  constructor(private shoppingservice :ShoppingListService) { }

  ngOnInit() {
  this.subscribtion=  this.shoppingservice.editingList
    .subscribe(
      (index:number) =>{
     this.editMode = true;
       this.editingItem = this.shoppingservice.getIngredient(index);
       this.editingItemNumber = index;
       this.slEdit.setValue({
         name :this.editingItem.name ,
         amount:this.editingItem.amount
       })

      }
    );

  }

  onClear() {
    this.slEdit.reset();
    this.editMode = false;
 
  }
  onDeleteIngredient() {
    this.shoppingservice.deletedIngredient(this.editingItemNumber);
    this.onClear();
  }
ngOnDestroy() {
  this.subscribtion.unsubscribe();
}
  onsubmit(form :NgForm) {
  // const ingName = this.nameInputRef.nativeElement.value;
  // const ingAmount = this.amouneInputRef.nativeElement.value;
const value = form.value;
  const newIngredient = new Ingredient(value.name,value.amount);
if(this.editMode) {
 this.shoppingservice.updateIngredient(this.editingItemNumber,newIngredient);
}else{
  this.shoppingservice.addIngredient(newIngredient);
}
  this.editMode = false;
  form.reset();
  }
 
  
}
