import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoreAboutComponent } from './section-more-about.component';

describe('SectionMoreAboutComponent', () => {
  let component: SectionMoreAboutComponent;
  let fixture: ComponentFixture<SectionMoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMoreAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
