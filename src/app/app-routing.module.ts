import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Route[] = [
  
    {path:'home',component:HomeComponent},
    
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {
      path:'settings',component:SettingsComponent,
      children:[
       
        {
          path:'profile',component:ProfileComponent 
        },
        {
        path:'contact',component:ContactComponent
        },
        { path:'**',redirectTo:'profile',pathMatch:'full'}
      ]
    },
    { path:'**',component:PageNotFoundComponent}
  
]; //Route is a inbuilt class.

@NgModule({
  imports: [RouterModule.forRoot(routes)], //configuring routes[] with angular
  exports: [RouterModule]
})
export class AppRoutingModule { }
