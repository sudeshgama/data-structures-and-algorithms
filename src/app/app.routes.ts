import { Routes } from '@angular/router';
import { TwoSumComponent } from './components/two-sum/two-sum.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ValidParenthesesComponent } from './components/valid-parentheses/valid-parentheses.component';

export const routes: Routes = [
  {
    path: '',
    component: TwoSumComponent
  },
  {
    path: 'two-sum',
    component: TwoSumComponent
  },
  {
    path: 'valid-parentheses',
    component: ValidParenthesesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];
