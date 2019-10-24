import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBitComponent } from './add-bit.component';

describe('AddBitComponent', () => {
  let component: AddBitComponent;
  let fixture: ComponentFixture<AddBitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
