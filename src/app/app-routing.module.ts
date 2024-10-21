import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // This code will be load fist time you in this app or web 
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'conflict-of-interest',
    loadChildren: () => import('./pages/conflict-of-interest/conflict-of-interest.module').then( m => m.ConflictOfInterestPageModule)
  },
  {
    path: 'code-of-conduct',
    loadChildren: () => import('./pages/code-of-conduct/code-of-conduct.module').then( m => m.CodeOfConductPageModule)
  },
  {
    path: 'sosialisasi-gcg',
    loadChildren: () => import('./pages/sosialisasi-gcg/sosialisasi-gcg.module').then( m => m.SosialisasiGcgPageModule)
  },
  {
    path: 'gratifikasi',
    loadChildren: () => import('./pages/gratifikasi/gratifikasi.module').then( m => m.GratifikasiPageModule)
  },
  {
    path: 'socialization-gcg',
    loadChildren: () => import('./pages/socialization-gcg/socialization-gcg.module').then( m => m.SocializationGcgPageModule)
  },
  {
    path: 'coi',
    loadChildren: () => import('./pages/coi/coi.module').then( m => m.CoiPageModule)
  },
  {
    path: 'gratification',
    loadChildren: () => import('./pages/gratification/gratification.module').then( m => m.GratificationPageModule)
  },
  {
    path: 'coc',
    loadChildren: () => import('./pages/coc/coc.module').then( m => m.CocPageModule)
  },  {
    path: 'question-four',
    loadChildren: () => import('./pages/question-four/question-four.module').then( m => m.QuestionFourPageModule)
  },
  {
    path: 'question-five',
    loadChildren: () => import('./pages/question-five/question-five.module').then( m => m.QuestionFivePageModule)
  },
  {
    path: 'question-six',
    loadChildren: () => import('./pages/question-six/question-six.module').then( m => m.QuestionSixPageModule)
  },
  {
    path: 'question-seven',
    loadChildren: () => import('./pages/question-seven/question-seven.module').then( m => m.QuestionSevenPageModule)
  },
  {
    path: 'question-eight',
    loadChildren: () => import('./pages/question-eight/question-eight.module').then( m => m.QuestionEightPageModule)
  },
  {
    path: 'question-nine',
    loadChildren: () => import('./pages/question-nine/question-nine.module').then( m => m.QuestionNinePageModule)
  },
  {
    path: 'question-ten',
    loadChildren: () => import('./pages/question-ten/question-ten.module').then( m => m.QuestionTenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
