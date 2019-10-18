import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrowComponent } from './barrow.component';

describe('BarrowComponent', () => {
  let component: BarrowComponent;
  let fixture: ComponentFixture<BarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
