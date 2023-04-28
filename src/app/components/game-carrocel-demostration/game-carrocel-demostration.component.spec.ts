import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarrocelDemostrationComponent } from './game-carrocel-demostration.component';

describe('GameCarrocelDemostrationComponent', () => {
  let component: GameCarrocelDemostrationComponent;
  let fixture: ComponentFixture<GameCarrocelDemostrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCarrocelDemostrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCarrocelDemostrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
