import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggModComponent } from './agg-mod.component';

describe('AggModComponent', () => {
  let component: AggModComponent;
  let fixture: ComponentFixture<AggModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
