import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPatientComponent } from './content-patient.component';

describe('ContentPatientComponent', () => {
  let component: ContentPatientComponent;
  let fixture: ComponentFixture<ContentPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
