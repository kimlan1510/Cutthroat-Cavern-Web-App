import { TestBed, inject } from '@angular/core/testing';

import { CreatureListService } from './creature-list.service';

describe('CreatureListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatureListService]
    });
  });

  it('should be created', inject([CreatureListService], (service: CreatureListService) => {
    expect(service).toBeTruthy();
  }));
});
