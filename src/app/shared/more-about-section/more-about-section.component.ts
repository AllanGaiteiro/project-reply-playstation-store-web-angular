import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-about-section',
  templateUrl: './more-about-section.component.html',
  styleUrls: ['./more-about-section.component.css']
})
export class MoreAboutSectionComponent implements OnInit {
  @Input() title = '';
  @Input() buttonText = '';
  @Input() theme = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
