import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent }     from './not-found.component';
import { ComposeMessageComponent }     from './compose-message.component';

import { LoginComponent }          from './login.component';

import { AppRoutingModule } from './app-routing.module';
//Heroes module is the owner of the Heroes components
import { HeroesModule }     from './heroes/heroes.module';
import { CrisisCenterModule }     from './crisis-center/crisis-center.module';
import { AdminModule }     from './admin/admin.module';
import { LoginRoutingModule }      from './login-routing.module';

import { DialogService }           from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    LoginRoutingModule, // login routing will be picked up when nothing is entered on the url: localhost:4200, it will redirect to localhost:4200/login
    AdminModule,
    AppRoutingModule // // if this is imported before other modules, it will be picked up when nothing is entered on the url: localhost:4200, it will redirect to localhost:4200/heroes
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Diagnostic only: inspect router configuration
   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
