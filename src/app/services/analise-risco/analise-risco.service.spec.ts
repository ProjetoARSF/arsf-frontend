import { TestBed } from '@angular/core/testing';

import { AnaliseRiscoService } from './analise-risco.service';

describe('AnaliseRiscoService', () => {
  let service: AnaliseRiscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnaliseRiscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
