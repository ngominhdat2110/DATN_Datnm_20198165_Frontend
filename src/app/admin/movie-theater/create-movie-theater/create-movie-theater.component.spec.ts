import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieTheaterComponent } from './create-movie-theater.component';

describe('CreateMovieTheaterComponent', () => {
  let component: CreateMovieTheaterComponent;
  let fixture: ComponentFixture<CreateMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
