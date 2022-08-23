import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivaisonComponent } from './listlivaison.component';

describe('ListlivaisonComponent', () => {
  let component: ListlivaisonComponent;
  let fixture: ComponentFixture<ListlivaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlivaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlivaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
