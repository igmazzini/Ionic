import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private _router: Router, private _nvControler: NavController) {}

  /**
   * test
   */
  public test() {
    let tarea:any = {name:'Test',descripcion:'Test DES'}
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tarea)
      }

    };

    this._router.navigate(['tarea'], navigationExtras);
    //this._nvControler.navigateForward(['tarea']);
  }

}
