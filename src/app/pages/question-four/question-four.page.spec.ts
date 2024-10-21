import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionFourPage } from './question-four.page';

describe('QuestionFourPage', () => {
  let component: QuestionFourPage;
  let fixture: ComponentFixture<QuestionFourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
