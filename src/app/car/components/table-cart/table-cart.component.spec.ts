import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCartComponent } from './table-cart.component';

describe('TableCartComponent', () => {
  let component: TableCartComponent;
  let fixture: ComponentFixture<TableCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
