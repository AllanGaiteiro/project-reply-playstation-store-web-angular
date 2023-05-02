import { Injectable } from '@angular/core';
import { games } from '../db/games';
import { Game } from '../models/games.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  constructor() { }

  findBestTem(): Game[] {
    return games.filter(g => g.tags.includes('bestTem'));
  }

  findDemo(): Game[] {
    return games.filter(g => g.tags.includes('demo'));
  }

  findNew(): Game[] {
    return games.filter(g => g.tags.includes('new'));
  }

  findShortly(): Game[] {
    return games.filter(g => g.tags.includes('shortly'));
  }
}
