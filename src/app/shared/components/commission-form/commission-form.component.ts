import { Component } from '@angular/core';
import { CommissionInterface } from '../../interfaces/commission-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommissionService } from 'src/app/core/services/commission.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-commission-form',
  templateUrl: './commission-form.component.html',
  styleUrls: ['./commission-form.component.scss']
})
export class CommissionFormComponent {
  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;

  constructor(
    private fb: FormBuilder,
    private commissionService: CommissionService
  ) { 
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      studentsIds: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
    })

    this.modeSubscription = this.commissionService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.commissionService.element)
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(course: CommissionInterface): void {
    this.mode === 'Crear' ? this.commissionService.createCommission(course) : this.commissionService.updateCommission(course);
    this.form.reset();
  }

  setMode(mode: string): void {
    this.commissionService.setModeObservable(mode);
  }
}