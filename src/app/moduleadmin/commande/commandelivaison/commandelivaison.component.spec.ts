import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandelivaisonComponent } from './commandelivaison.component';

describe('CommandelivaisonComponent', () => {
  let component: CommandelivaisonComponent;
  let fixture: ComponentFixture<CommandelivaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandelivaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandelivaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
