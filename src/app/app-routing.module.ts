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
import { TestComponent } from './test/test/test.component';


const routes: Routes = [

  { path: '', component: QuizListComponent },
  { path: 'admin/quizzes/new', component: QuizFormComponent },
  { path: 'admin/quizzes/:id', component: QuizDetailsComponent },
  { path: 'admin/quizzes/edit/:id', component: QuizFormComponent },
  { path: 'admin/quizzes/:quizId/questions/new', component: QuestionFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/edit', component: QuestionFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/choices/new', component: ChoiceFormComponent },
  { path: 'admin/quizzes/:quizId/questions/:questionId/choices/:choiceId/edit', component: ChoiceFormComponent },
  {path: 'auth/test/:id',component: QuizTestComponent},
  { path: 'admin/quizzes', component: QuizListComponent },
  {path:'auth/quizzeslist',component:QuizListUserComponent},
  {path:'auth/scorelist',component:ScoreListUserComponent},
  {path:'auth/combatgame',component:CombatGameComponent},
  {path:'test/component',component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
