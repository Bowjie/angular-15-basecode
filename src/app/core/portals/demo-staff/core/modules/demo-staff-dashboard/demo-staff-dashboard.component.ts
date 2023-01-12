import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DemoStoreUserService } from 'src/app/core/services/common';

@Component({
  selector: 'app-demo-staff-dashboard',
  templateUrl: './demo-staff-dashboard.component.html',
  styleUrls: ['./demo-staff-dashboard.component.scss'],
})
export class DemoStaffDashboardComponent implements OnInit {
  private subscription = new Subscription();
  constructor(private demoStoreUserService: DemoStoreUserService) {}

  ngOnInit(): void {
    this.demoStoreUserService
      .getStoredUser()
      .pipe(take(1)) //Automatically completes/unsubscribe
      .subscribe({
        next(value) {
          console.log(value);
        },
        complete() {
          console.log('completes');
        },
      });
  }
}
