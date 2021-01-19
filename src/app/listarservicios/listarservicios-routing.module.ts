import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarserviciosPage } from './listarservicios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarserviciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarserviciosPageRoutingModule {}
