import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EditionProfilComponent } from '../components/edition-profil/edition-profil.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes : Route[] = [
  {path:'', redirectTo:'tableaudebord', pathMatch:'full'},
  {path:'dashboard', redirectTo:'tableaudebord'},
  {path : 'tableaudebord', component : DashboardComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'profil/editer/:id', component : EditionProfilComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
