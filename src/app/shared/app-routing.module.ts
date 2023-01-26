import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from '../core/pages/app/home/home-routing.module';
import { CourseDetailPageRoutingModule } from '../core/pages/app/course-detail-page/course-detail-page-routing.module';
import { AppLayoutRoutingModule } from '../core/layout/app-layout/app-layout-routing.module';
import { AdminLayoutComponent } from '../core/layout/admin-layout/admin-layout.component';
import { AdminLayoutRoutingModule } from '../core/layout/admin-layout/admin-layout-routing.module';
import { DashboardPageRoutingModule } from '../core/pages/admin/dashboard-page/dashboard-page-routing.module';
import { StudentsPageRoutingModule } from '../core/pages/admin/students-page/students-page-routing.module';
import { CoursesPageRoutingModule } from '../core/pages/admin/courses-page/courses-page-routing.module';


const routes: Routes = [
  { path: '', loadChildren: () => import('../core/layout/app-layout/app-layout-routing.module').then(m => m.AppLayoutRoutingModule) },

  { path: 'admin/login', loadChildren: () => import('../core/layout/admin-login-layout/admin-login-layout-routing.module').then(m => m.AdminLoginLayoutRoutingModule) },
  
  { path: 'admin', loadChildren: () => import('../core/layout/admin-layout/admin-layout-routing.module').then(m => m.AdminLayoutRoutingModule) },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppLayoutRoutingModule,
    AdminLayoutRoutingModule,
    HomeRoutingModule,
    CourseDetailPageRoutingModule,
    DashboardPageRoutingModule,
    StudentsPageRoutingModule,
    CoursesPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
