import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatDetailsComponent } from './seat-details.component';

describe('SeatDetailsComponent', () => {
  let component: SeatDetailsComponent;
  let fixture: ComponentFixture<SeatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
