import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Utilisateur } from '../entities/utilisateur';

@Injectable()
export class UtilisateursService 
{

  constructor(private http: Http) { }

   getById(id:Number){

    let resultat : Utilisateur;

    let link = 'http://localhost:8092/jaxrs/rest/calc/utilisateurs/' + id;
    
    /*
    this.http.request(link).subscribe((res: Response) => {
      resultat = res.json();
      */

    return this.http.get(link)
              .map(res => res.json());


  }

  // créer une méthode getAll

  // créer une méthode getById
  
  // déclarer dans appmodule

  // paramétrer le composant editionUtilisateurs pour qu'il utilise ce service

  // compléter le composant utilisateur (affichage d'un formulaire d'édition)

}
