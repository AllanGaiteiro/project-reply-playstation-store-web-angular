import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlaystoreComponent } from './header-playstore.component';

describe('HeaderPlaystoreComponent', () => {
  let component: HeaderPlaystoreComponent;
  let fixture: ComponentFixture<HeaderPlaystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPlaystoreComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderPlaystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
