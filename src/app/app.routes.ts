import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lesson',
    pathMatch: 'full'
  },
  {
    path: 'lesson',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'lesson/:id',
    loadComponent: () =>
      import('./pages/lesson/lesson.component').then(m => m.LessonComponent)
  },
  {
    path: '**',
    redirectTo: 'lesson'
  }
];