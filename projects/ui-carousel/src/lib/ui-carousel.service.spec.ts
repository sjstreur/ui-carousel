import { TestBed } from '@angular/core/testing';

import { UiCarouselService } from './ui-carousel.service';

describe('UiCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiCarouselService = TestBed.get(UiCarouselService);
    expect(service).toBeTruthy();
  });
});
