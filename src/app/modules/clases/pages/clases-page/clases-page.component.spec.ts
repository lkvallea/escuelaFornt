import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesPageComponent } from './clases-page.component';

describe('ClasesPageComponent', () => {
  let component: ClasesPageComponent;
  let fixture: ComponentFixture<ClasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasesPageComponent]
    });
    fixture = TestBed.createComponent(ClasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
