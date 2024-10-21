import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionNinePage } from './question-nine.page';

describe('QuestionNinePage', () => {
  let component: QuestionNinePage;
  let fixture: ComponentFixture<QuestionNinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
