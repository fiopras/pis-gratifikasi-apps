import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionSixPage } from './question-six.page';

describe('QuestionSixPage', () => {
  let component: QuestionSixPage;
  let fixture: ComponentFixture<QuestionSixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuestionSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
