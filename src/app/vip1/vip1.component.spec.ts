import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vip1Component } from './vip1.component';

describe('Vip1Component', () => {
  let component: Vip1Component;
  let fixture: ComponentFixture<Vip1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vip1Component]
    });
    fixture = TestBed.createComponent(Vip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
