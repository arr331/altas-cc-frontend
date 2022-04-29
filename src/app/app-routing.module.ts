import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/motos', pathMatch: 'full' },
  { path: 'motos', loadChildren: () => import('./feature/moto/moto.module').then(mod => mod.MotoModule) },
  { path: 'compras', loadChildren: () => import('./feature/compra/compra.module').then(mod => mod.CompraModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
