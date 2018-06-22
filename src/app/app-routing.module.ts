import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }     from './not-found.component';
import { ComposeMessageComponent }     from './compose-message.component';


// The feature routes are now provided by the HeroesModule and the CrisisCenter modules.
const appRoutes: Routes = [
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
  },

  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }, // If the pathMatch value were 'prefix', every URL would match ''.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
