import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitSectionComponent } from './bit-section.component';

describe('BitSectionComponent', () => {
  let component: BitSectionComponent;
  let fixture: ComponentFixture<BitSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
