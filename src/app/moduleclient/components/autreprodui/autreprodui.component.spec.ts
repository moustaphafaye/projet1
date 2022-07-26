import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreproduiComponent } from './autreprodui.component';

describe('AutreproduiComponent', () => {
  let component: AutreproduiComponent;
  let fixture: ComponentFixture<AutreproduiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreproduiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreproduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
