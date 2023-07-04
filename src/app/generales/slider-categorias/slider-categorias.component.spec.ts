import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCategoriasComponent } from './slider-categorias.component';

describe('SliderCategoriasComponent', () => {
  let component: SliderCategoriasComponent;
  let fixture: ComponentFixture<SliderCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
