import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenmusicComponent } from './listenmusic.component';

describe('ListenmusicComponent', () => {
  let component: ListenmusicComponent;
  let fixture: ComponentFixture<ListenmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
