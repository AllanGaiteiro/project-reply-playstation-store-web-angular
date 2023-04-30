import { Component } from '@angular/core';
import { Game } from 'src/app/models/games.interface';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-game-carrocel-demostration',
  templateUrl: './game-carrocel-demostration.component.html',
  styleUrls: ['./game-carrocel-demostration.component.css']
})
export class GameCarrocelDemostrationComponent {
  games?: Game[];

  constructor(private gamesService: GamesService) {

  }
  ngOnInit() {
    this.find();
  }

  find() {
    this.games = this.gamesService.findDemo();
  }

}
