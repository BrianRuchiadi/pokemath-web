import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderguestComponent } from './headerguest.component';

describe('HeaderguestComponent', () => {
  let component: HeaderguestComponent;
  let fixture: ComponentFixture<HeaderguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
