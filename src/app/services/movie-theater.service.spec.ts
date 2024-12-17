import { TestBed } from '@angular/core/testing';

import { MovieTheaterService } from './movie-theater.service';

describe('MovieTheaterService', () => {
  let service: MovieTheaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTheaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
