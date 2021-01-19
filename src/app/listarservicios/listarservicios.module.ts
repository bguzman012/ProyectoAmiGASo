import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarserviciosPageRoutingModule } from './listarservicios-routing.module';

import { ListarserviciosPage } from './listarservicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarserviciosPageRoutingModule
  ],
  declarations: [ListarserviciosPage]
})
export class ListarserviciosPageModule {}
