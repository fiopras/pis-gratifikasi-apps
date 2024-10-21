import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionTenPage } from './question-ten.page';

describe('QuestionTenPage', () => {
  let component: QuestionTenPage;
  let fixture: ComponentFixture<QuestionTenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
