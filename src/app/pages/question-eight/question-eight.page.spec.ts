import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionEightPage } from './question-eight.page';

describe('QuestionEightPage', () => {
  let component: QuestionEightPage;
  let fixture: ComponentFixture<QuestionEightPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
