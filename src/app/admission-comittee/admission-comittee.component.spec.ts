import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionComitteeComponent } from './admission-comittee.component';

describe('AdmissionComitteeComponent', () => {
  let component: AdmissionComitteeComponent;
  let fixture: ComponentFixture<AdmissionComitteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionComitteeComponent]
    });
    fixture = TestBed.createComponent(AdmissionComitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
