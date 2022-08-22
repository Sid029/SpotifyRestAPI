import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidmusicComponent } from './paidmusic.component';

describe('PaidmusicComponent', () => {
  let component: PaidmusicComponent;
  let fixture: ComponentFixture<PaidmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
