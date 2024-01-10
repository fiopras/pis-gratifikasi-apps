import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeOfConductPage } from './code-of-conduct.page';

describe('CodeOfConductPage', () => {
  let component: CodeOfConductPage;
  let fixture: ComponentFixture<CodeOfConductPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodeOfConductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
