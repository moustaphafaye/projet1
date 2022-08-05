import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutailComponent } from './menutail.component';

describe('MenutailComponent', () => {
  let component: MenutailComponent;
  let fixture: ComponentFixture<MenutailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
