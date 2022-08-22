import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExampleComponent } from './category-example.component';

describe('CategoryExampleComponent', () => {
  let component: CategoryExampleComponent;
  let fixture: ComponentFixture<CategoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
