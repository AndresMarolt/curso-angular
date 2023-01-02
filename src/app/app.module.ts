import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { PageWrapper } from './layout/pageWrapper/page-wrapper.component';
import { StudentsNamesPipePipe } from './pipes/students-names-pipe.pipe';
import { HeadingsSizeDirective } from './directives/headings-size.directive';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StudentsListComponent,
    PageWrapper, 
    StudentsNamesPipePipe,
    HeadingsSizeDirective,
    DashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
