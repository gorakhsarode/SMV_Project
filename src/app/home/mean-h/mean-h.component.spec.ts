import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanHComponent } from './mean-h.component';

describe('MeanHComponent', () => {
  let component: MeanHComponent;
  let fixture: ComponentFixture<MeanHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
