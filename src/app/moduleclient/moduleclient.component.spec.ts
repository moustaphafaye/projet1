import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleclientComponent } from './moduleclient.component';

describe('ModuleclientComponent', () => {
  let component: ModuleclientComponent;
  let fixture: ComponentFixture<ModuleclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
