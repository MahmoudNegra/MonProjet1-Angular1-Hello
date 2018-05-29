import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'biat';
  participants: string [] = ['SAMI', 'MAHMOUD', 'ZOUHEIR', 'Houssem'];
}
