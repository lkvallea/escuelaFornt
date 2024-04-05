import { Component,OnInit  } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consultar-page',
  templateUrl: './consultar-page.component.html',
  styleUrls: ['./consultar-page.component.css']
})


export class ConsultarPageComponent implements OnInit {

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    const querys = 'getStudent?matricula=1000000009'; // Valor de la matrícula variable
    this.consultaService.obtenerDatosPorMatricula(querys).subscribe(datos => {
      console.log(datos); // Manejar la respuesta de la solicitud GET
    });

  }
}
