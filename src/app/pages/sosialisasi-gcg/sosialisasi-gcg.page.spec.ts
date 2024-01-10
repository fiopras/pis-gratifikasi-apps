import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SosialisasiGcgPage } from './sosialisasi-gcg.page';

describe('SosialisasiGcgPage', () => {
  let component: SosialisasiGcgPage;
  let fixture: ComponentFixture<SosialisasiGcgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SosialisasiGcgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
