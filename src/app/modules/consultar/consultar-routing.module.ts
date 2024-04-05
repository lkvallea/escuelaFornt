import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarPageComponent } from './pages/consultar-page/consultar-page.component';

const routes: Routes = [{
  path:"",
  component:ConsultarPageComponent,
  outlet:'child'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarRoutingModule { }
