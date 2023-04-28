import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationPlusMoreAboutComponent } from './playstation-plus-more-about.component';

describe('PlaystationPlusMoreAboutComponent', () => {
  let component: PlaystationPlusMoreAboutComponent;
  let fixture: ComponentFixture<PlaystationPlusMoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystationPlusMoreAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationPlusMoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
