import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../modules/material.module';
import { PipesModule } from '../../pipes/pipes.module';

import { StudentsListComponent } from './students-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListComponent ],
      imports: [
        PipesModule,
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
