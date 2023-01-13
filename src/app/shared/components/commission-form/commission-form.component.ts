import { Component } from '@angular/core';
import { CommissionInterface } from '../../interfaces/commission-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'
import { CommissionsService } from 'src/app/core/services/commissions.service';

@Component({
  selector: 'app-commission-form',
  templateUrl: './commission-form.component.html',
  styleUrls: ['./commission-form.component.scss']
})

export class CommissionFormComponent {
  public form: FormGroup;

  public modeSubscription: Subscription;
  
  public mode: string;
  public commissions: CommissionInterface[];

  constructor(
    private fb: FormBuilder,
    public commissionsService: CommissionsService
  ) {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      courseId: ['', [Validators.required]]

    })

    this.commissions = this.commissionsService.commissions;

    this.modeSubscription = this.commissionsService.mode$.subscribe(mode => {
      this.mode = mode;
      this.mode === 'Crear' ? this.form.reset() : this.form.patchValue(this.commissionsService.element)
    })
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe()
  }

  submit(commission: CommissionInterface): void {
    this.mode === 'Crear' ? this.commissionsService.createCommission(commission) : this.commissionsService.updateCommission(commission);
    
    this.form.reset();
  }

  setMode(mode: string): void {
    this.commissionsService.setModeObservable(mode);
  }
}