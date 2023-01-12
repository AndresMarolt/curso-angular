import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AdminLayoutComponent } from '../core/layout/admin-layout/admin-layout.component';
import { AppLayoutComponent } from '../core/layout/app-layout/app-layout.component';

import { CoursesPageComponent } from '../core/pages/admin/courses-page/courses-page.component';
import { DashboardPageComponent } from '../core/pages/admin/dashboard-page/dashboard-page.component';
import { StudentsPageComponent } from '../core/pages/admin/students-page/students-page.component';
import { CourseDetailPageComponent } from '../core/pages/course-detail-page/course-detail-page.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { CommissionsPageComponent } from '../core/pages/admin/commissions-page/commissions-page.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'courses/:course', component: CourseDetailPageComponent }
  ] },

  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: '', component: DashboardPageComponent },
    { path: 'alumnos', component: StudentsPageComponent },
    { path: 'cursos', component: CoursesPageComponent },
    { path: 'comisiones', component: CommissionsPageComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
