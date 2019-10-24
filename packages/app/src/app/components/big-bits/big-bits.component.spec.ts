import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBitsComponent } from './big-bits.component';

describe('BigBitsComponent', () => {
  let component: BigBitsComponent;
  let fixture: ComponentFixture<BigBitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
