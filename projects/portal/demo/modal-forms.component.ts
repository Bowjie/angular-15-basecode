import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'projects/services/demo/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-forms',
  template: `
    <div class="modal show">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ props.title }}</h5>
            <button (click)="closeMe()" type="button" class="btn-close"></button>
          </div>

          <div class="modal-body">
            <form [formGroup]="userForm">
              <div class="mb-3">
                <label class="form-label">First</label>
                <input formControlName="first" type="text" class="form-control" placeholder="Enter first" />
                <div
                  *ngIf="userForm.get('first')?.invalid && (userForm.get('first')?.dirty || userForm.get('first')?.touched)"
                  class="invalid-feedback"
                >
                  Field is required
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Last</label>
                <input formControlName="last" type="text" class="form-control" placeholder="Enter last" />
                <div
                  *ngIf="userForm.get('last')?.invalid && (userForm.get('last')?.dirty || userForm.get('last')?.touched)"
                  class="invalid-feedback"
                >
                  Field is required
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Handle</label>
                <input formControlName="handle" type="text" class="form-control" placeholder="Enter handle" />
                <div
                  *ngIf="userForm.get('handle')?.invalid && (userForm.get('handle')?.dirty || userForm.get('handle')?.touched)"
                  class="invalid-feedback"
                >
                  Field is required
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button (click)="closeMe()" type="button" class="btn btn-secondary">Close</button>
            <button (click)="confirm()" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  `,
  styles: [
    `
      .show {
        display: block !important;
      }
      .invalid-feedback {
        display: block !important;
      }
    `,
  ],
})
export class ModalFormsComponent implements OnInit, OnDestroy {
  @Input() props: any = {};
  @Output() closeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  userForm!: FormGroup;
  subscription = new Subscription();

  constructor(private userService: UserService) {
    this.userForm = new FormGroup({
      first: new FormControl(null, Validators.required),
      last: new FormControl(null, Validators.required),
      handle: new FormControl(null, Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeEvent.emit();
  }

  confirm() {
    if (this.userForm.valid) {
      const data = this.userForm.value;

      if (this.props.isEdit) {
        this.updateUser(data);
      } else {
        this.createUser(data);
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  updateUser(data: any) {
    this.subscription.add(
      this.userService.createUser(data).subscribe(() => {
        this.confirmEvent.emit();
      }),
    );
  }

  createUser(data: any) {
    this.subscription.add(
      this.userService.createUser(data).subscribe(() => {
        this.confirmEvent.emit();
      }),
    );
  }
}
