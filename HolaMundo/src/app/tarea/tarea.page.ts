import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {

  tareaId: string = '';
  tarea: any = {name:'',descripcion:'',active:false};
  constructor(private _ruta: ActivatedRoute, private _nvgControler: NavController) {
    
    this._ruta.queryParams.subscribe(params => {
     
      if (params && params.special) {
        this.tarea = JSON.parse(params.special);
        //console.log(this.tarea);
      }     

    });

    
  }

  ngOnInit() {



  }

  /**
   * goBack
   */
  public goBack() {
    this._nvgControler.back();
  }

}
