import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  { path: 'sesion', component: SesionComponent  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
 
  { path: '**', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SesionComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
