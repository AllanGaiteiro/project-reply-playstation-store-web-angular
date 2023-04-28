import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-game',
  templateUrl: './carrousel-game.component.html',
  styleUrls: ['./carrousel-game.component.css']
})
export class CarrouselGameComponent {
  @Input() games: any[] = [];
}
