import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCrudComponent } from './btn-crud.component';

describe('BtnCrudComponent', () => {
  let component: BtnCrudComponent;
  let fixture: ComponentFixture<BtnCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
