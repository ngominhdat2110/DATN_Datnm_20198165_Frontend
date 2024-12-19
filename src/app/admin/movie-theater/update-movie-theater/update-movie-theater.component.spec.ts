import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieTheaterComponent } from './update-movie-theater.component';

describe('UpdateMovieTheaterComponent', () => {
  let component: UpdateMovieTheaterComponent;
  let fixture: ComponentFixture<UpdateMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
