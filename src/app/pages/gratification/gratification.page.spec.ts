import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GratificationPage } from './gratification.page';

describe('GratificationPage', () => {
  let component: GratificationPage;
  let fixture: ComponentFixture<GratificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GratificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
