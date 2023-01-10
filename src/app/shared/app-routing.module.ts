import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { CoursesPageComponent } from './pages/admin/courses-page/courses-page.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { StudentsPageComponent } from './pages/admin/students-page/students-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'courses/:course', component: CourseDetailPageComponent }
  ] },

  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: '', component: DashboardPageComponent },
    { path: 'alumnos', component: StudentsPageComponent },
    { path: 'cursos', component: CoursesPageComponent },
    { path: 'form', component: FormComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
