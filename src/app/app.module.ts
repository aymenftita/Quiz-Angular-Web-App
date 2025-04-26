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
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VisualisationComponent } from './component/admin/visualisation/visualisation.component';
import { TestComponent } from './component/admin/test/test.component';
import { QuestionResponseComponent } from './component/admin/question-response/question-response.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlidingPuzzleComponent } from './game/sliding-puzzle/sliding-puzzle.component';
import { TakeTestComponent } from './component/user/take-test/take-test.component';
import { TestListComponent } from './component/user/test-list/test-list.component';




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
    VisualisationComponent,
    TestComponent,
    QuestionResponseComponent,
    SlidingPuzzleComponent,
    TakeTestComponent,
    TestListComponent,
    


    
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
    MatProgressSpinnerModule,
    NgbModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
