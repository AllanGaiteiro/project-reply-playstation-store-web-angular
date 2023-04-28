import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarrocelBestTenComponent } from './game-carrocel-best-ten.component';

describe('GameCarrocelBestTenComponent', () => {
  let component: GameCarrocelBestTenComponent;
  let fixture: ComponentFixture<GameCarrocelBestTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCarrocelBestTenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCarrocelBestTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
