import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoiPage } from './coi.page';

describe('CoiPage', () => {
  let component: CoiPage;
  let fixture: ComponentFixture<CoiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
