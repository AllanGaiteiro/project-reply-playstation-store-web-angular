import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent {
  @Input() itens: string[] = [];
  @Input() gridCol = 4;
  width: number = 1200;
  gridTemplateColumns: string = `repeat(${this.gridCol}, auto)`;
  colWidth = 290;
  height = 810;
  constructor() {

  }

  ngOnInit() {
    this.gridTemplateColumns = `repeat(${this.gridCol}, 1fr)`;
    this.colWidth = ((this.width / (this.gridCol)) - 10);
    this.height = ((this.colWidth + 10) * Math.ceil(this.itens.length / this.gridCol))
  }
}
