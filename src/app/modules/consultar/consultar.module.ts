import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarRoutingModule } from './consultar-routing.module';
import { ConsultarPageComponent } from './pages/consultar-page/consultar-page.component';


@NgModule({
  declarations: [
    ConsultarPageComponent
  ],
  imports: [
    CommonModule,
    ConsultarRoutingModule
  ]
})
export class ConsultarModule { }
