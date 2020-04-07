import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConfigureComponent } from './light-configure.component';

describe('LightConfigureComponent', () => {
  let component: LightConfigureComponent;
  let fixture: ComponentFixture<LightConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
