import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vip5Component } from './vip5.component';

describe('Vip5Component', () => {
  let component: Vip5Component;
  let fixture: ComponentFixture<Vip5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vip5Component]
    });
    fixture = TestBed.createComponent(Vip5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
