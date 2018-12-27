import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutAsComponent } from './about-as/about-as.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';
import { ResevationComponent } from './resevation/resevation.component';
import {HttpClientModule} from '@angular/common/http'


const routes: Routes = [{path:'', redirectTo:'/HomePage',pathMatch:'full'},
{path:'HomePage' , component:HomePageComponent},
{path:'AboutAs',component:AboutAsComponent},
{path:'FoodMenu',component:FoodMenuComponent},
{path:'Reservation' ,component:ResevationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponant = [HomePageComponent,AboutAsComponent,FoodMenuComponent,ResevationComponent]
