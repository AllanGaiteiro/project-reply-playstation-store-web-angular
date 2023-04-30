import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Input() backGroundImage = '';
  @Input() width?: number;
  constructor() { }

  ngOnInit(): void {
    if (!this.width) {
      this.width = 290
    }

  }

}
