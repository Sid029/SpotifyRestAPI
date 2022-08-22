import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExampleTrackComponent } from './category-example-track.component';

describe('CategoryExampleTrackComponent', () => {
  let component: CategoryExampleTrackComponent;
  let fixture: ComponentFixture<CategoryExampleTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryExampleTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryExampleTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
