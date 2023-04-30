import { Component } from '@angular/core';
import { Game } from 'src/app/models/games.interface';
import { GamesService } from 'src/app/service/games.service';
@Component({
  selector: 'app-game-carrocel-shortly',
  templateUrl: './game-carrocel-shortly.component.html',
  styleUrls: ['./game-carrocel-shortly.component.css']
})
export class GameCarrocelShortlyComponent {
  games?: Game[];

  constructor(private gamesService: GamesService) {

  }
  ngOnInit() {
    this.find();
  }

  find() {
    this.games = this.gamesService.findShortly();
  }
}
