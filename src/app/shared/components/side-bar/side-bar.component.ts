import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  mainMenu:{
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions:[], accessLink:[]}

  ngOnInit(): void{
    this.mainMenu.defaultOptions =[
      {
        name:'Home',
        icon:'uil-estate',
        router: ['/']
      },
      {
        name:'Estudiantes',
        icon:'uil-search',
        router: ['/consultar']
      },
      {
        name:'Clases',
        icon:'uil-chart',
        router: ['/clases']
      }
    ]
  }
}
