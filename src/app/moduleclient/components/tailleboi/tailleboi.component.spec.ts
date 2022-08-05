import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleboiComponent } from './tailleboi.component';

describe('TailleboiComponent', () => {
  let component: TailleboiComponent;
  let fixture: ComponentFixture<TailleboiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailleboiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailleboiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
