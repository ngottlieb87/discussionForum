import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodWorkComponent } from './wood-work.component';

describe('WoodWorkComponent', () => {
  let component: WoodWorkComponent;
  let fixture: ComponentFixture<WoodWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
