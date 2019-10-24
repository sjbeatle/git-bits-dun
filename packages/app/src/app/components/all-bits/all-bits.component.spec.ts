import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBitsComponent } from './all-bits.component';

describe('AllBitsComponent', () => {
  let component: AllBitsComponent;
  let fixture: ComponentFixture<AllBitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
