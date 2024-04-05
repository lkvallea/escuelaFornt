import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarModule } from '@modules/consultar/consultar.module';
import { ClasesModule } from '@modules/clases/clases.module';

const routes: Routes = [
  {
    path:'consultar',
    loadChildren:()=>import("@modules/consultar/consultar.module").then(m=>ConsultarModule)
  },
  {
    path:'clases',
    loadChildren:()=>import("@modules/clases/clases.module").then(m=>m.ClasesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
