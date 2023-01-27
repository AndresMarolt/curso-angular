import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { StudentsListModule } from 'src/app/shared/components/students-list/students-list.module';

import { StudentsPageComponent } from './students-page.component';

describe('StudentsPageComponent', () => {
  let component: StudentsPageComponent;
  let fixture: ComponentFixture<StudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPageComponent ],
      imports: [
        FormModule,
        StudentsListModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
