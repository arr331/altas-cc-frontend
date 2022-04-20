import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMotoComponent } from './listar-moto.component';

describe('ListarMotoComponent', () => {
  let component: ListarMotoComponent;
  let fixture: ComponentFixture<ListarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
