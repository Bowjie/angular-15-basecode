import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStaffContactComponent } from './demo-staff-contact.component';

describe('DemoStaffContactComponent', () => {
  let component: DemoStaffContactComponent;
  let fixture: ComponentFixture<DemoStaffContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStaffContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoStaffContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
