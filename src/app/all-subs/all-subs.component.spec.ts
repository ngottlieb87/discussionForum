import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubsComponent } from './all-subs.component';

describe('AllSubsComponent', () => {
  let component: AllSubsComponent;
  let fixture: ComponentFixture<AllSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
