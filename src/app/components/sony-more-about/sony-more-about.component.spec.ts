import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyMoreAboutComponent } from './sony-more-about.component';

describe('SonyMoreAboutComponent', () => {
  let component: SonyMoreAboutComponent;
  let fixture: ComponentFixture<SonyMoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonyMoreAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyMoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
