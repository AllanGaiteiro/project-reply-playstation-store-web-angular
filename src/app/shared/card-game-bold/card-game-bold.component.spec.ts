import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameBoldComponent } from './card-game-bold.component';

describe('CardGameBoldComponent', () => {
  let component: CardGameBoldComponent;
  let fixture: ComponentFixture<CardGameBoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGameBoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGameBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
