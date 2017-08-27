import { Utilisateur } from '../entities/utilisateur';
import { Sexe } from '../entities/sexe.enum';

export const UTILISATEURS : Utilisateur[] = [
    { id:1, sexe:Sexe.Femme, nom:'Rabbit', prenom:'Jessica', competences:['java', 'cobol', 'mysql'], ratings : 5},
    { id:2, sexe:Sexe.Homme, nom:'Redford', prenom:'Robert', competences:['C#', 'java', "murmurer à l'oreille des chevaux"], ratings : 4},
    { id:3, sexe:Sexe.Homme, nom:'Ribery', prenom:'Franck', competences:[], ratings : 0},
    { id:4, sexe:Sexe.Femme, nom:'Doe', prenom:'Jane', competences:['angular', 'oracle', 'mysql'], ratings : 5},
];