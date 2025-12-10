import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqacCommitteeComponent } from './iqac-committee.component';

describe('IqacCommitteeComponent', () => {
  let component: IqacCommitteeComponent;
  let fixture: ComponentFixture<IqacCommitteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IqacCommitteeComponent]
    });
    fixture = TestBed.createComponent(IqacCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
