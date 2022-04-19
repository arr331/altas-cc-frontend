import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoRoutingModule } from './moto-routing.module';
import { MotoComponent } from './components/moto/moto.component';
import { SharedModule } from '@shared/shared.module';
import { MotoService } from './shared/service/moto.service';


@NgModule({
  declarations: [
    MotoComponent
  ],
  imports: [
    CommonModule,
    MotoRoutingModule,
    SharedModule
  ],
  providers: [MotoService]
})
export class MotoModule { }
