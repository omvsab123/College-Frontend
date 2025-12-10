import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcidComponent } from './abcid.component';

describe('AbcidComponent', () => {
  let component: AbcidComponent;
  let fixture: ComponentFixture<AbcidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbcidComponent]
    });
    fixture = TestBed.createComponent(AbcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
