import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarMotoComponent } from './comprar-moto.component';

describe('ComprarMotoComponent', () => {
  let component: ComprarMotoComponent;
  let fixture: ComponentFixture<ComprarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
