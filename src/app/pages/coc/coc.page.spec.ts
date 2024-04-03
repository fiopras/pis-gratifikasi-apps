import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocPage } from './coc.page';

describe('CocPage', () => {
  let component: CocPage;
  let fixture: ComponentFixture<CocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
