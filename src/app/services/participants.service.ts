import { Injectable } from '@angular/core';
import { Participant } from '../domain/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }


  getAll(): Participant [] { return [
    {'numero': 'P1000' , 'nom': 'Sami', 'age': 25},
    {'numero': 'P2000' , 'nom': 'MAHMOUD', 'age': 20},
    {'numero': 'P3000' , 'nom': 'ZOUHEIR', 'age': 99},
    {'numero': 'P4000' , 'nom': 'Houssem', 'age': 15}
  ];
}
}
