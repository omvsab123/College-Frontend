import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vip4Component } from './vip4.component';

describe('Vip4Component', () => {
  let component: Vip4Component;
  let fixture: ComponentFixture<Vip4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vip4Component]
    });
    fixture = TestBed.createComponent(Vip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
