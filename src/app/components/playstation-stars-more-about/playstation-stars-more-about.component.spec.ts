import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationStarsMoreAboutComponent } from './playstation-stars-more-about.component';

describe('PlaystationStarsMoreAboutComponent', () => {
  let component: PlaystationStarsMoreAboutComponent;
  let fixture: ComponentFixture<PlaystationStarsMoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystationStarsMoreAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationStarsMoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
