import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent }     from './not-found.component';
import { ComposeMessageComponent }     from './compose-message.component';


import { AppRoutingModule } from './app-routing.module';
//Heroes module is the owner of the Heroes components
import { HeroesModule }     from './heroes/heroes.module';
import { CrisisCenterModule }     from './crisis-center/crisis-center.module';

import { DialogService }           from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule // use a module for routes
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
