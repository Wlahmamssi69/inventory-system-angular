import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierComponent } from './page-supplier.component';

describe('PageSupplierComponent', () => {
  let component: PageSupplierComponent;
  let fixture: ComponentFixture<PageSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
