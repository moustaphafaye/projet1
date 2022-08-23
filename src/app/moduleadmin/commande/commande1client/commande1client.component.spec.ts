import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commande1clientComponent } from './commande1client.component';

describe('Commande1clientComponent', () => {
  let component: Commande1clientComponent;
  let fixture: ComponentFixture<Commande1clientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commande1clientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commande1clientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
