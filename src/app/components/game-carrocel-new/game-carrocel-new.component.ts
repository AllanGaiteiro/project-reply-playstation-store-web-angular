import { Component } from '@angular/core';
import { Game } from 'src/app/models/games.interface';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-game-carrocel-new',
  templateUrl: './game-carrocel-new.component.html',
  styleUrls: ['./game-carrocel-new.component.css']
})
export class GameCarrocelNewComponent {
  games?: Game[];

  constructor(private gamesService: GamesService) {

  }
  ngOnInit() {
    this.find();
  }

  find() {
    this.games = this.gamesService.findNew();
  }


}
