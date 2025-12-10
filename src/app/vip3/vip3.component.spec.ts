import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vip3Component } from './vip3.component';

describe('Vip3Component', () => {
  let component: Vip3Component;
  let fixture: ComponentFixture<Vip3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vip3Component]
    });
    fixture = TestBed.createComponent(Vip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
