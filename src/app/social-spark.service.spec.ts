import { TestBed } from '@angular/core/testing';

import { SocialSparkService } from './social-spark.service';

describe('SocialSparkService', () => {
  let service: SocialSparkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialSparkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
