import { TestBed } from '@angular/core/testing';

import { CLIENTEService } from './cliente.service';

describe('CLIENTEService', () => {
  let service: CLIENTEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CLIENTEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
