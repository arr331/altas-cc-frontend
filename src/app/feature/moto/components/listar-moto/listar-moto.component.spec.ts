import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { MotoService } from '../../shared/service/moto.service';

import { ListarMotoComponent } from './listar-moto.component';

describe('ListarMotoComponent', () => {
  let component: ListarMotoComponent;
  let fixture: ComponentFixture<ListarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMotoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [MotoService, HttpService]
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
