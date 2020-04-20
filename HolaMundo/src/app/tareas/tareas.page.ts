import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';





@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  name: string = 'Tareas desde Angular';
  lista: any[] = [{ name: 'Correr', descripcion: 'Tenes que correr gato', active: true },
  { name: 'Saltar', descripcion: 'Tenes que saltar gato', active: true },
  { name: 'Abdominales', descripcion: 'Tenes que hacer abdominales gato', active: true }];
  taskDid: boolean = false;
  constructor(private _router: Router, private _nvControler: NavController) { }

  ngOnInit() {
  }

  /**
   * clickOnItem
   */
  public clickOnItem(index) {

    this.lista[index].active = !this.lista[index].active;
  }

  /**
   * did
index   */
  public did(index) {
    return this.lista[index].active;
  }


  /**
   * goTo
   */
  public goToTarea(tarea) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tarea)
      }

    };

    this._router.navigate(['tarea'], navigationExtras);
   
    

  }


  

}
