import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonmenuComponent } from './boissonmenu.component';

describe('BoissonmenuComponent', () => {
  let component: BoissonmenuComponent;
  let fixture: ComponentFixture<BoissonmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
