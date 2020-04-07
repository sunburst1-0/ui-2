import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningGeneralComponent } from './warnning-general.component';

describe('WarnningGeneralComponent', () => {
  let component: WarnningGeneralComponent;
  let fixture: ComponentFixture<WarnningGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnningGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
