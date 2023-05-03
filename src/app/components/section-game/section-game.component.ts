import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/games.interface';

@Component({
  selector: 'app-section-game',
  templateUrl: './section-game.component.html',
  styleUrls: ['./section-game.component.css']
})
export class SectionGameComponent implements OnInit {
  @Input() game?: Game;

  ngOnInit(): void {

  }
}
