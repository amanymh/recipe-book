import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
//import { AuthGuard } from "../auth/auth-guard.service";
import { AuthService } from "../auth/auth.service";
import { DtataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shoping-list/shopping/shopping-list.service";




@NgModule({
    declarations:[
        HeaderComponent
        ,HomeComponent
    ],
    imports:[
        AppRoutingModule,
        SharedModule],

    exports:[
        HeaderComponent,
        AppRoutingModule]
        ,
        providers:[
            ShoppingListService,
            RecipeService,
            DtataStorageService,
            AuthService,
           // AuthGuard we will provide it in reciperoutingmodule as itis the only module use it
        ]
})
export class CoreModule{}