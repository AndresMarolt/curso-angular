import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionFormModule } from 'src/app/shared/components/inscription-form/inscription-form.module';

import { InscriptionsPageComponent } from './inscriptions-page.component';

describe('InscriptionsPageComponent', () => {
  let component: InscriptionsPageComponent;
  let fixture: ComponentFixture<InscriptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsPageComponent ],
      imports: [
        InscriptionFormModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
