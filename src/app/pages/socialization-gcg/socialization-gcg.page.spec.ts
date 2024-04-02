import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocializationGcgPage } from './socialization-gcg.page';

describe('SocializationGcgPage', () => {
  let component: SocializationGcgPage;
  let fixture: ComponentFixture<SocializationGcgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SocializationGcgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
