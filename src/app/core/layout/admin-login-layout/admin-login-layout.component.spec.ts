import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AdminLoginLayoutComponent } from './admin-login-layout.component';

describe('AdminLoginLayoutComponent', () => {
  let component: AdminLoginLayoutComponent;
  let fixture: ComponentFixture<AdminLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginLayoutComponent ],
      imports: [
        RouterModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
