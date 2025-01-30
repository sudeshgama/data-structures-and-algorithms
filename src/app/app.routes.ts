import { Routes } from '@angular/router';
import { TwoSumComponent } from './components/two-sum/two-sum.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'two-sum',
    component: TwoSumComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
