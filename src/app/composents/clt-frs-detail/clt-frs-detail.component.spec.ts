import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CltFrsDetailComponent } from './clt-frs-detail.component';

describe('CltFrsDetailComponent', () => {
  let component: CltFrsDetailComponent;
  let fixture: ComponentFixture<CltFrsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CltFrsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CltFrsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
