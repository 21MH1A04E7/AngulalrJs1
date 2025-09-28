import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderdataComponent } from './renderdata.component';

describe('RenderdataComponent', () => {
  let component: RenderdataComponent;
  let fixture: ComponentFixture<RenderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
