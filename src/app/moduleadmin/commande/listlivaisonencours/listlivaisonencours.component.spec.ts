import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivaisonencoursComponent } from './listlivaisonencours.component';

describe('ListlivaisonencoursComponent', () => {
  let component: ListlivaisonencoursComponent;
  let fixture: ComponentFixture<ListlivaisonencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlivaisonencoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlivaisonencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
