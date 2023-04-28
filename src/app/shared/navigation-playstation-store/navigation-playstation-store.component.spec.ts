import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPlaystationStoreComponent } from './navigation-playstation-store.component';

describe('NavigationPlaystationStoreComponent', () => {
  let component: NavigationPlaystationStoreComponent;
  let fixture: ComponentFixture<NavigationPlaystationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationPlaystationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPlaystationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
