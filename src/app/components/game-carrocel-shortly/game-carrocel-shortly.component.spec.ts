import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarrocelShortlyComponent } from './game-carrocel-shortly.component';

describe('GameCarrocelShortlyComponent', () => {
  let component: GameCarrocelShortlyComponent;
  let fixture: ComponentFixture<GameCarrocelShortlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCarrocelShortlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCarrocelShortlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
