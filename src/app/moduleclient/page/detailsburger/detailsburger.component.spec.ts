import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsburgerComponent } from './detailsburger.component';

describe('DetailsburgerComponent', () => {
  let component: DetailsburgerComponent;
  let fixture: ComponentFixture<DetailsburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsburgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
