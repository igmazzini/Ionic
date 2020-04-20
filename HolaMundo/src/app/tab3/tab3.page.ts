import { Component } from '@angular/core';
import {ServiceGetJSONService} from '../services/service-get-json.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  users:any;
  constructor(public service:ServiceGetJSONService) {

    this.service.getUsers().subscribe(
      (data) => { 
        this.users = data;
        console.log('Users '+this.users);
      }
    );

   
    
    
    
    
   
  }

  ionViewDidLoad(){
   console.log('ON VIEW CREATED');
  }
}
