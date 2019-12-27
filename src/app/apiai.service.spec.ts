import { TestBed } from '@angular/core/testing';

import { ApiaiService } from './apiai.service';

describe('ApiaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiaiService = TestBed.get(ApiaiService);
    expect(service).toBeTruthy();
  });
});
