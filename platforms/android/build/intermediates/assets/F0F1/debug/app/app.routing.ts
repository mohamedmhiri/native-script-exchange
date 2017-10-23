import { PalmaresComponent } from './palmares/palmares.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/palmares", pathMatch: "full" },
    { path: "market", component: ItemsComponent },
    //{ path: "market/:id", component: ItemDetailComponent },
    { path: "palmares", component: PalmaresComponent },
    //{ path: "convertor", component: ConvertorComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }