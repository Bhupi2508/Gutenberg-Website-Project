import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumourComponent } from './humour.component';

describe('HumourComponent', () => {
  let component: HumourComponent;
  let fixture: ComponentFixture<HumourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
