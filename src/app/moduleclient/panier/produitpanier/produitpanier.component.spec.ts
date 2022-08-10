import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitpanierComponent } from './produitpanier.component';

describe('ProduitpanierComponent', () => {
  let component: ProduitpanierComponent;
  let fixture: ComponentFixture<ProduitpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitpanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
