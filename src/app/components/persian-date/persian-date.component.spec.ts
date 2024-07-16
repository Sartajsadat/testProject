import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianDateComponent } from './persian-date.component';

describe('PersianDateComponent', () => {
  let component: PersianDateComponent;
  let fixture: ComponentFixture<PersianDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersianDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersianDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
