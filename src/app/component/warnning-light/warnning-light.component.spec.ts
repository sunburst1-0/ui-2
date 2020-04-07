import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningLightComponent } from './warnning-light.component';

describe('WarnningLightComponent', () => {
  let component: WarnningLightComponent;
  let fixture: ComponentFixture<WarnningLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnningLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
