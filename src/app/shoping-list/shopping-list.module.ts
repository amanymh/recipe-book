import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ShopingListComponent } from './shoping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ShopingListComponent,
     ShoppingEditComponent,
    
  ],
  exports:[]
})
export class ShoppinglistModule { }
