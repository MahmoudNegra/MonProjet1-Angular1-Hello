import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Participant } from '../domain/participant';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
 participants: Participant [];
constructor (private _service: ParticipantsService) {}
// Constructor injection
  ngOnInit() {

    this.participants = this._service.getAll();

  }

}
