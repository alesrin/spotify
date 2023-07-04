import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCategoriasComponent } from './grid-categorias.component';

describe('GridCategoriasComponent', () => {
  let component: GridCategoriasComponent;
  let fixture: ComponentFixture<GridCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
