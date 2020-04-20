import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo: string = 'Home';
  constructor(public alertController: AlertController) {

  }

  /**
   * boton
   */
  async onClick() {

    
    const alert = await this.alertController.create({
      header: 'Hola Mundo',
      subHeader: 'Alerta',
      message: 'MADA FAKA',
      inputs:[
        {
          name: 'name1',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        }
      ],
      buttons: [
        {
          text: 'Okay',
          handler: data  => {
            console.log('Confirm Okay');
            
            this.confirmAlert(data);
            
          }
        },
        {
          text: 'Cancel',
          role:'cancel',
          handler: () => {
            console.log('Confirm Cancel');
            this.cancelAlert();
            
          }
        }

      ]
    });

    await alert.present();
  }

  /**
   * confirmAlert
   */
  public confirmAlert(data:any) {
    this.titulo = 'Hola mundo';
    console.log(data.name1);
    
   
  }

  /**
   * cancelAlert
   */
  public cancelAlert() {
    this.titulo = 'Alerta cancelada';
  }

}
