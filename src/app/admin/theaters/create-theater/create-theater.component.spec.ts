import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheaterComponent } from './create-theater.component';

describe('CreateTheaterComponent', () => {
  let component: CreateTheaterComponent;
  let fixture: ComponentFixture<CreateTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
