import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-game-bold',
  templateUrl: './card-game-bold.component.html',
  styleUrls: ['./card-game-bold.component.css']
})
export class CardGameBoldComponent {
  @Input() game: any;
}
