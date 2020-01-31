import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Component1 } from './modules/component1/component1';
import { Comp2 } from './modules/component2/comp2';
import { header } from './modules/headers/header';
import { Component3 } from './modules/component3/component3';

const routes: Routes = [
    { path: '', redirectTo: '/component1', pathMatch: 'full' },
    { path: 'component1', component: Component1 },
    { path: 'component2', component: Comp2 },
    { path: '', component: header },
    { path: 'home', component: Component3 },
   // { path: '**', component: AppComponent } // If no matching route found, go back to home route 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
