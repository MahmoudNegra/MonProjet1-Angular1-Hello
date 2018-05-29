import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Participant } from '../domain/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
 participants: Participant [];
  constructor() { }

  ngOnInit() {

    this.participants = [
      {'numero': 'P1000' , 'nom': 'Sami', 'age': 25},
      {'numero': 'P2000' , 'nom': 'MAHMOUD', 'age': 20},
      {'numero': 'P3000' , 'nom': 'ZOUHEIR', 'age': 99},
      {'numero': 'P4000' , 'nom': 'Houssem', 'age': 15}
    ];

  }

}
