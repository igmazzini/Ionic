import { TestBed } from '@angular/core/testing';

import { ServiceGetJSONService } from './service-get-json.service';

describe('ServiceGetJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGetJSONService = TestBed.get(ServiceGetJSONService);
    expect(service).toBeTruthy();
  });
});
