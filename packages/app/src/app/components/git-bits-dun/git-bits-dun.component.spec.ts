import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBitsDunComponent } from './git-bits-dun.component';

describe('GitBitsDunComponent', () => {
  let component: GitBitsDunComponent;
  let fixture: ComponentFixture<GitBitsDunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBitsDunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBitsDunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
