import { TestBed } from '@angular/core/testing';

import { RouteInfoService } from './route-info.service';

describe('RouteInfoService', () => {
  let service: RouteInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
