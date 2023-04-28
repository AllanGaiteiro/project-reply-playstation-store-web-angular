import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSonyComponent } from './logo-sony.component';

describe('LogoSonyComponent', () => {
  let component: LogoSonyComponent;
  let fixture: ComponentFixture<LogoSonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
