import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeatComponent } from './update-seat.component';

describe('UpdateSeatComponent', () => {
  let component: UpdateSeatComponent;
  let fixture: ComponentFixture<UpdateSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
