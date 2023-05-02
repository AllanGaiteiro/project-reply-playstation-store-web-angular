import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/games.interface';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent {
  gameId?: number;
  game?: Game;
  constructor(private route: ActivatedRoute, private gameService: GamesService) {
    this.route.paramMap.subscribe((res) => {
      const game = res.get('id')
      if (game) {
        this.gameId = parseInt(game);
      }

    });
  }

  ngOnInit() {
    if (this.gameId) {
      this.gameService.find(this.gameId).then((res) => {
        console.log('res', res)
        this.game = res;
      });
    }

  }
}
