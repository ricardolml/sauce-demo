import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInformationUserComponent } from './cart-information-user.component';

describe('CartInformationUserComponent', () => {
  let component: CartInformationUserComponent;
  let fixture: ComponentFixture<CartInformationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartInformationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInformationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
