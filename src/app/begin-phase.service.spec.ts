import { TestBed, inject } from '@angular/core/testing';

import { BeginPhaseService } from './begin-phase.service';

describe('BeginPhaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeginPhaseService]
    });
  });

  it('should be created', inject([BeginPhaseService], (service: BeginPhaseService) => {
    expect(service).toBeTruthy();
  }));
});
