import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConflictOfInterestPage } from './conflict-of-interest.page';

describe('ConflictOfInterestPage', () => {
  let component: ConflictOfInterestPage;
  let fixture: ComponentFixture<ConflictOfInterestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConflictOfInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
