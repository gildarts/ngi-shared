import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGadgetComponent } from './web-gadget.component';

describe('WebGadgetComponent', () => {
  let component: WebGadgetComponent;
  let fixture: ComponentFixture<WebGadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebGadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
