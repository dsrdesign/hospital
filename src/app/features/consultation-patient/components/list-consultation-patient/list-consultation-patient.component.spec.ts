import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultationPatientComponent } from './list-consultation-patient.component';

describe('ListConsultationPatientComponent', () => {
  let component: ListConsultationPatientComponent;
  let fixture: ComponentFixture<ListConsultationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultationPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConsultationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
