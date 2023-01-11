import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStaffDashboardComponent } from './demo-staff-dashboard.component';

describe('DemoStaffDashboardComponent', () => {
  let component: DemoStaffDashboardComponent;
  let fixture: ComponentFixture<DemoStaffDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStaffDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoStaffDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
