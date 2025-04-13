import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizTestComponent } from './component/admin/quizz-test/quizz-test.component';

import { QuizListComponent } from './component/admin/quiz-list/quiz-list.component';
import { QuizFormComponent } from './component/admin/quiz-form/quiz-form.component';
import { QuestionFormComponent } from './component/admin/question-form/question-form.component';
import { ChoiceFormComponent } from './component/admin/choice-form/choice-form.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizListUserComponent } from './component/user/quiz-list-user/quiz-list-user.component';
import { ScoreListUserComponent } from './component/user/score-list-user/score-list-user.component';
import { HeaderComponent } from './component/user/header/header.component';
import { CombatGameComponent } from './game/combat-game/combat-game.component';
import { QuizAnalyticsComponent } from './test/test/quiz-analytics.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    QuizTestComponent,
    QuizListComponent,
    QuizFormComponent,
    QuestionFormComponent,
    ChoiceFormComponent,
    QuizListUserComponent,
    ScoreListUserComponent,
    HeaderComponent,
    CombatGameComponent,
    QuizAnalyticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
