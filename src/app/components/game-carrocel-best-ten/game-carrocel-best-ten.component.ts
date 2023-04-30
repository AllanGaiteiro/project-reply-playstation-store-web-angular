import { Component } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';
import { Game } from '../../models/games.interface';

@Component({
  selector: 'app-game-carrocel-best-ten',
  templateUrl: './game-carrocel-best-ten.component.html',
  styleUrls: ['./game-carrocel-best-ten.component.css'],
})
export class GameCarrocelBestTenComponent {
  games?: Game[];

  constructor(private gamesService: GamesService) {

  }
  ngOnInit() {
    this.find();
  }

  find() {
    this.games = this.gamesService.findBestTem();
  }

}
