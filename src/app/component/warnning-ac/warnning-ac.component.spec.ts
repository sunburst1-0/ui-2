import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningAcComponent } from './warnning-ac.component';

describe('WarnningAcComponent', () => {
  let component: WarnningAcComponent;
  let fixture: ComponentFixture<WarnningAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnningAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
