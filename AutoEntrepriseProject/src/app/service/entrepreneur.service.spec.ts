import { TestBed } from '@angular/core/testing';

import { EntrepreneurService } from './entrepreneur.service';

describe('EntrepreneurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrepreneurService = TestBed.get(EntrepreneurService);
    expect(service).toBeTruthy();
  });
});
