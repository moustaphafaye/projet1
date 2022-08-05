import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutaillesComponent } from './menutailles.component';

describe('MenutaillesComponent', () => {
  let component: MenutaillesComponent;
  let fixture: ComponentFixture<MenutaillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutaillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
