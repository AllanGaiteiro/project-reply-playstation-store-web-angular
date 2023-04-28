import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSonyComponent } from './navigation-sony.component';

describe('NavigationSonyComponent', () => {
  let component: NavigationSonyComponent;
  let fixture: ComponentFixture<NavigationSonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
