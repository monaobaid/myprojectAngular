import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';
import { ResevationComponent } from './resevation/resevation.component';
import {HttpClientModule} from '@angular/common/http'


const routes: Routes = [{path:'', redirectTo:'/HomaPage',pathMatch:'full'},
{path:'HomaPage' , component:HomePageComponent},
{path:'ContactUs',component:ContactUsComponent},
{path:'FoodMenu',component:FoodMenuComponent},
{path:'Reservation' ,component:ResevationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponant = [HomePageComponent,ContactUsComponent,FoodMenuComponent,ResevationComponent]
