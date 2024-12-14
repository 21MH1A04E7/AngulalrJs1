import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDirective2Component } from './if-directive2.component';

describe('IfDirective2Component', () => {
  let component: IfDirective2Component;
  let fixture: ComponentFixture<IfDirective2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfDirective2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfDirective2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
