import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }   from './crisis-center/crisis-list.component';

import { PageNotFoundComponent }     from './not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
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
