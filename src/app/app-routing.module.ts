import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizTestComponent } from './component/admin/quizz-test/quizz-test.component';


import { QuizFormComponent } from './component/admin/quiz-form/quiz-form.component';
import { QuizListComponent } from './component/admin/quiz-list/quiz-list.component';
import { QuestionFormComponent } from './component/admin/question-form/question-form.component';
import { ChoiceFormComponent } from './component/admin/choice-form/choice-form.component';
import { QuizDetailsComponent } from './component/admin/quiz-details/quiz-details.component';
import { QuizListUserComponent } from './component/user/quiz-list-user/quiz-list-user.component';
import { ScoreListUserComponent } from './component/user/score-list-user/score-list-user.component';
import { CombatGameComponent } from './game/combat-game/combat-game.component';
import { VisualisationComponent } from './component/admin/visualisation/visualisation.component';
import { TestComponent } from './component/admin/test/test.component';
import { QuestionResponseComponent } from './component/admin/question-response/question-response.component';
import { SlidingPuzzleComponent } from './game/sliding-puzzle/sliding-puzzle.component';
import { TakeTestComponent } from './component/user/take-test/take-test.component';
import { TestListComponent } from './component/user/test-list/test-list.component';





const routes: Routes = [

  { path: '', component: QuizListComponent },
  { path: 'admin/quizzes/new', component: QuizFormComponent },
  { path: 'admin/quizzes/:id', component: QuizDetailsComponent },
  { path: 'admin/quizzes/edit/:id', component: QuizFormComponent },
  { path: 'admin/quizzes/:quizId/questions/new', component: QuestionFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/edit', component: QuestionFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/choices/new', component: ChoiceFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/choices/:choiceId/edit', component: ChoiceFormComponent },
  {path:'admin/visualisation',component:VisualisationComponent},
  {path: 'auth/test/:id',component: QuizTestComponent},
  { path: 'admin/quizzes', component: QuizListComponent },
  {path:'auth/quizzeslist',component:QuizListUserComponent},
  {path:'auth/scorelist',component:ScoreListUserComponent},
  {path:'auth/combatgame',component:CombatGameComponent},
  {path:'admin/tests',component:TestComponent},
  { path: 'admin/question-responses', component: QuestionResponseComponent },
  {path:'slide',component:SlidingPuzzleComponent},
  {path:'auth/taketest/:id',component:TakeTestComponent},
  {path:'testlist',component:TestListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
