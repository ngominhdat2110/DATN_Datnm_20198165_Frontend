import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheaterDetailsComponent } from './movie-theater-details.component';

describe('MovieTheaterDetailsComponent', () => {
  let component: MovieTheaterDetailsComponent;
  let fixture: ComponentFixture<MovieTheaterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTheaterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieTheaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
