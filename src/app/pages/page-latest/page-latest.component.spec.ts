import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLatestComponent } from './page-latest.component';

describe('PageLatestComponent', () => {
  let component: PageLatestComponent;
  let fixture: ComponentFixture<PageLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
