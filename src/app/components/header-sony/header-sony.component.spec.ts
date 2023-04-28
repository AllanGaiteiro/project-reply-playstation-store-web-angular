import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSonyComponent } from './header-sony.component';

describe('HeaderSonyComponent', () => {
  let component: HeaderSonyComponent;
  let fixture: ComponentFixture<HeaderSonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
