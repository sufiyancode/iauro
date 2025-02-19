import { Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { TempFormComponent } from './components/temp-form/temp-form.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { loginCheckGuard } from './components/login-check.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [loginCheckGuard],
    children: [
      {
        path: 'directive',
        component: DirectiveComponent,
      },
      {
        path: 'form',
        component: TempFormComponent,
      },

      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
    ],
  },
];
