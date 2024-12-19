import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheaterListComponent } from './movie-theater-list.component';

describe('MovieTheaterListComponent', () => {
  let component: MovieTheaterListComponent;
  let fixture: ComponentFixture<MovieTheaterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTheaterListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieTheaterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
