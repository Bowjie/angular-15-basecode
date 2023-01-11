import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription, shareReplay } from 'rxjs';
import { Demo } from 'src/app/core/models/demo';
import { ModalService } from 'src/app/core/services/common';
import { UserService } from 'src/app/core/services/demo';
import { ModalFormsComponent } from './components/modal-forms.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { read: ViewContainerRef })
  modalEntry!: ViewContainerRef;
  demoList!: Observable<Demo[]>;
  subscription = new Subscription();

  constructor(private modalService: ModalService, private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUser() {
    this.demoList = this.userService.getUser().pipe(shareReplay(1));
  }

  deleteRow(user: Demo) {
    if (confirm('are you sure to delete?')) {
      this.subscription.add(
        this.userService.deleteUser(user.demoId).subscribe(() => {
          this.getUser();
        }),
      );
    }
  }

  openModal(isEdit: boolean = false, data: Demo | null = null) {
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
{
}
