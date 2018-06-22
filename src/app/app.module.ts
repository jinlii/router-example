import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Heroes module is the owner of the Heroes components
import { HeroesModule }     from './heroes/heroes.module';

import { CrisisListComponent }   from './crisis-center/crisis-list.component';

import { PageNotFoundComponent }     from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    AppRoutingModule // use a module for routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
