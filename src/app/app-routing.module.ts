import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from '../app/login/login.component';
import{HomeComponent} from'../app/home/home.component';
import{DocumentsComponent} from'../app/documents/documents.component';
import{AboutUsComponent}from'../app/about-us/about-us.component';

const routes: Routes = [

  {path:'list',component:LoginComponent},
  {path:'list/Home',component:HomeComponent},
  {path:'list/Home/document',component:DocumentsComponent},
  {path:'list/Home/aboutus',component:AboutUsComponent},
 

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
