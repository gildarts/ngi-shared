import { TestBed } from '@angular/core/testing';

import { WebGadgetService } from './web-gadget.service';

describe('WebGadgetService', () => {
  let service: WebGadgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebGadgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
