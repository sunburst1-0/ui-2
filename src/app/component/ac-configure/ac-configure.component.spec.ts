import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcConfigureComponent } from './ac-configure.component';

describe('AcConfigureComponent', () => {
  let component: AcConfigureComponent;
  let fixture: ComponentFixture<AcConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
