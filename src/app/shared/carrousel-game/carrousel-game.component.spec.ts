import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselGameComponent } from './carrousel-game.component';

describe('CarrouselGameComponent', () => {
  let component: CarrouselGameComponent;
  let fixture: ComponentFixture<CarrouselGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
