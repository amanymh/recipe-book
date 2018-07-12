import { NgModule } from "@angular/core";
import { Routes } from "@angular/Router";
import { RouterModule } from "@angular/Router";

import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
import { PreloadAllModules } from "@angular/Router";


const appRoutes : Routes = [
    {path : '', component:HomeComponent},
    {path : 'recipes' , loadChildren:'app/recipes/recipes.module#RecipesModule'},
    {path : 'shopping-list' , component: ShopingListComponent},
  
  ];
  
  
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
}) 
export class AppRoutingModule {}