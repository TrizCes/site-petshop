import { TestBed } from '@angular/core/testing';

import { CpfValuerService } from './cpf-valuer.service';

describe('CpfValuerService', () => {
  let service: CpfValuerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfValuerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
