import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSmallCardComponent } from './movie-small-card.component';

describe('MovieSmallCardComponent', () => {
  let component: MovieSmallCardComponent;
  let fixture: ComponentFixture<MovieSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSmallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
