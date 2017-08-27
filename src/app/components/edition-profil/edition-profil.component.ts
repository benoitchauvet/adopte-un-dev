import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Utilisateur } from '../../entities/utilisateur';
import { UtilisateursService } from '../../services/utilisateurs.service';

@Component({
  selector: 'app-edition-profil',
  templateUrl: './edition-profil.component.html',
  styleUrls: ['./edition-profil.component.css']
})
export class EditionProfilComponent implements OnInit {

  idUtilisateur : Number;

  utilisateur : Utilisateur = new Utilisateur();

  constructor(
    private route: ActivatedRoute,
    private utilisateursService : UtilisateursService
  ) 
  { }

  ngOnInit() : void {

    // récupération des paramètres dans l'url :
    this.route.params.subscribe( params => {
      this.idUtilisateur = +params['id'];
    }); 

    //this.utilisateur = this.utilisateursService.getById(this.idUtilisateur);


    this.utilisateursService.getById(this.idUtilisateur)
                      .subscribe(utilisateur => this.utilisateur = utilisateur);
    


  }

}
