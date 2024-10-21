import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionFivePage } from './question-five.page';

describe('QuestionFivePage', () => {
  let component: QuestionFivePage;
  let fixture: ComponentFixture<QuestionFivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
