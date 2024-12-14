import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDirective1Component } from './change-directive1.component';

describe('ChangeDirective1Component', () => {
  let component: ChangeDirective1Component;
  let fixture: ComponentFixture<ChangeDirective1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeDirective1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDirective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
