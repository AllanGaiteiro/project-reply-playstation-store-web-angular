import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarrocelNewComponent } from './game-carrocel-new.component';

describe('GameCarrocelNewComponent', () => {
  let component: GameCarrocelNewComponent;
  let fixture: ComponentFixture<GameCarrocelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCarrocelNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCarrocelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
