import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoScanCopyComponent } from './photo-scan-copy.component';

describe('PhotoScanCopyComponent', () => {
  let component: PhotoScanCopyComponent;
  let fixture: ComponentFixture<PhotoScanCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoScanCopyComponent]
    });
    fixture = TestBed.createComponent(PhotoScanCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
