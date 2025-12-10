import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vip2Component } from './vip2.component';

describe('Vip2Component', () => {
  let component: Vip2Component;
  let fixture: ComponentFixture<Vip2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vip2Component]
    });
    fixture = TestBed.createComponent(Vip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
