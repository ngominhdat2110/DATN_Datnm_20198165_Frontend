import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheaterComponent } from './update-theater.component';

describe('UpdateTheaterComponent', () => {
  let component: UpdateTheaterComponent;
  let fixture: ComponentFixture<UpdateTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
