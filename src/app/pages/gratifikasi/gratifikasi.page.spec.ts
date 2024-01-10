import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GratifikasiPage } from './gratifikasi.page';

describe('GratifikasiPage', () => {
  let component: GratifikasiPage;
  let fixture: ComponentFixture<GratifikasiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GratifikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
