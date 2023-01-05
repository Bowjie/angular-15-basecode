import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from 'projects/services/common/modal.service';
import { UserService } from 'projects/services/demo/services';
import { User } from 'projects/services/demo/models/user';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { ModalFormsComponent } from './modal-forms.component';

@Component({
  selector: 'app-demo',
  template: `
    <div class="container mt-4">
      <div class="my-3 text-end">
        <app-button (click)="openModal()" iconClass="bi bi-plus-lg" btnStyle="btn-dark" size="btn-sm"> Add user</app-button>
      </div>
      <table class="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col" class="text-end" style="width: 100px">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of demoList | async; let i = index">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.first }}</td>
            <td>{{ item.last }}</td>
            <td>{{ item.handle }}</td>
            <td class="text-end">
              <app-button (click)="openModal(true, item)" iconClass="bi bi-pen-fill" size="btn-sm" class="me-1"></app-button>
              <app-button (click)="deleteRow(item)" iconClass="bi bi-trash3-fill" size="btn-sm"></app-button>
            </td>
          </tr>
          <tr *ngIf="!(demoList | async)">
            <td colspan="5" class="text-center">No records found</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div #modal></div>
  `,
  styles: [],
})
export class DemoComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: ViewContainerRef })
  modalEntry!: ViewContainerRef;
  demoList!: Observable<User[]>;
  subscription = new Subscription();

  constructor(private modalService: ModalService, private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUser() {
    this.demoList = this.userService.getUser().pipe(shareReplay(1));
  }

  deleteRow(user: User) {
    if (confirm('are you sure to delete?')) {
      this.subscription.add(
        this.userService.deleteUser(user.id).subscribe(() => {
          this.getUser();
        }),
      );
    }
  }

  openModal(isEdit: boolean = false, data: User | null = null) {
    const props = {
      title: `${isEdit ? 'Edit' : 'Create'} user`,
      isEdit: isEdit,
      prevData: data,
    };
    this.subscription.add(
      this.modalService.openModal(ModalFormsComponent, this.modalEntry, props).subscribe((result) => {
        if (result === 'confirm') {
          this.getUser();
        }
      }),
    );
  }
}
