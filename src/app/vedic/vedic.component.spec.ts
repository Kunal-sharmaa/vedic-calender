import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedicComponent } from './vedic.component';

describe('VedicComponent', () => {
  let component: VedicComponent;
  let fixture: ComponentFixture<VedicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VedicComponent]
    });
    fixture = TestBed.createComponent(VedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
