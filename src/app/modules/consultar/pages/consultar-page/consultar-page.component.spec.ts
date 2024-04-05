import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPageComponent } from './consultar-page.component';

describe('ConsultarPageComponent', () => {
  let component: ConsultarPageComponent;
  let fixture: ComponentFixture<ConsultarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPageComponent]
    });
    fixture = TestBed.createComponent(ConsultarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
