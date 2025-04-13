import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnalyticsComponent } from './quiz-analytics.component';

describe('TestComponent', () => {
  let component: QuizAnalyticsComponent;
  let fixture: ComponentFixture<QuizAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAnalyticsComponent]
    });
    fixture = TestBed.createComponent(QuizAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
