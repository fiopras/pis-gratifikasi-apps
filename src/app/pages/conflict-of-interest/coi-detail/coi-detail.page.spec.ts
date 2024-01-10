import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoiDetailPage } from './coi-detail.page';

describe('CoiDetailPage', () => {
  let component: CoiDetailPage;
  let fixture: ComponentFixture<CoiDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
