import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { NotfoundComponent } from './view/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
