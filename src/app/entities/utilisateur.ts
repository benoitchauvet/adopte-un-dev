import { Sexe } from './sexe.enum';

export class Utilisateur {

    id:Number;
    sexe:Sexe;
    nom:String;
    prenom:String;
    competences:String[];
    ratings:Number;

}