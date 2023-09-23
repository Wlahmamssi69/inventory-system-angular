import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCltSupComponent } from './new-clt-sup.component';

describe('NewCltSupComponent', () => {
  let component: NewCltSupComponent;
  let fixture: ComponentFixture<NewCltSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCltSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCltSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
