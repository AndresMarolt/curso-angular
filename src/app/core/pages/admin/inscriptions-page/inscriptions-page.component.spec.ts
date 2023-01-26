import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsPageComponent } from './inscriptions-page.component';

describe('InscriptionsPageComponent', () => {
  let component: InscriptionsPageComponent;
  let fixture: ComponentFixture<InscriptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsPageComponent ]
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
