import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { MotoService } from '../../shared/service/moto.service';

import { MotoComponent } from './moto.component';

describe('MotoComponent', () => {
  let component: MotoComponent;
  let fixture: ComponentFixture<MotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoComponent ],
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
    fixture = TestBed.createComponent(MotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
