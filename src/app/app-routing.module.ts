import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { GastoComponent } from './components/gasto/gasto.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
{path: '', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'},
{path: 'ingresar-presupuesto', component: IngresarPresupuestoComponent},
{path: 'gastos', component: GastoComponent},
{path: '**', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
