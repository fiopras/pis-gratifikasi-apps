import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionSevenPage } from './question-seven.page';

describe('QuestionSevenPage', () => {
  let component: QuestionSevenPage;
  let fixture: ComponentFixture<QuestionSevenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
