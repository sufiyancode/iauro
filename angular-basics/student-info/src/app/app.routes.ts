import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { LoginComponent } from './components/login/login.component';
import { checkLoginGuard } from './components/guard/check-login.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SidenavComponent,
    canActivate: [checkLoginGuard],
    children: [
      {
        path: 'students',
        component: StudentListComponent,
        canActivate: [checkLoginGuard],
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        canActivate: [checkLoginGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
