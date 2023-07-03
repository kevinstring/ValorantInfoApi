/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValorantService } from './valorant.service';

describe('Service: Valorant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValorantService]
    });
  });

  it('should ...', inject([ValorantService], (service: ValorantService) => {
    expect(service).toBeTruthy();
  }));
});
