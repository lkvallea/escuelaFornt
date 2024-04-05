import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesPageComponent } from './pages/clases-page/clases-page.component';


@NgModule({
  declarations: [
    ClasesPageComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
