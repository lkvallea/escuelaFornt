import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesPageComponent } from './pages/clases-page/clases-page.component';

const routes: Routes = [{
  path:"",
  component:ClasesPageComponent,
  outlet:'child'
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
