import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHighlightComponent } from './movie-highlight.component';

describe('MovieHighlightComponent', () => {
  let component: MovieHighlightComponent;
  let fixture: ComponentFixture<MovieHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
