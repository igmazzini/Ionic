import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo:string = 'Home';
  constructor() {
    console.log('Constructor Tab1');
  }

  /**
   * boton
   */
  public onClick() {
    console.log('Click');
    console.log('que onda');
    this.titulo = 'Hola Mundo!';
  }

}
