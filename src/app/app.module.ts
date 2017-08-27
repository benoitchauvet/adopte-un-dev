import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilComponent } from './components/profil/profil.component';
import { EditionProfilComponent } from './components/edition-profil/edition-profil.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UtilisateursService } from './services/utilisateurs.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfilComponent,
    EditionProfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UtilisateursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
