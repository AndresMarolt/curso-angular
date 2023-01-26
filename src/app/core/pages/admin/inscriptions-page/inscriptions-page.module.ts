import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsPageComponent } from './inscriptions-page.component';
import { InscriptionsPageRoutingModule } from './inscriptions-page-routing.module';
import { InscriptionFormModule } from 'src/app/shared/components/inscription-form/inscription-form.module';



@NgModule({
  declarations: [InscriptionsPageComponent],
  imports: [
    CommonModule,
    InscriptionsPageRoutingModule,
    InscriptionFormModule
  ]
})
export class InscriptionsPageModule { }
