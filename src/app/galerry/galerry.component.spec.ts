import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerryComponent } from './galerry.component';

describe('GalerryComponent', () => {
  let component: GalerryComponent;
  let fixture: ComponentFixture<GalerryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalerryComponent]
    });
    fixture = TestBed.createComponent(GalerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
