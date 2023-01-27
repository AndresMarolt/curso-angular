import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailPageRoutingModule } from './course-detail-page-routing.module';

import { CourseDetailPageComponent } from './course-detail-page.component';
import { CourseDetailPageModule } from './course-detail-page.module';

describe('CourseDetailPageComponent', () => {
  let component: CourseDetailPageComponent;
  let fixture: ComponentFixture<CourseDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailPageComponent ],
      imports: [
        CourseDetailPageRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
