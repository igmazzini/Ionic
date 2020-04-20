import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TareasPage } from './tareas.page';


const routes: Routes = [
  {
    path: '',
    component: TareasPage,
    children: [
      {
        path: 'tarea',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../tarea/tarea.module').then(m => m.TareaPageModule)
          }
        ]
      }
    ]
   
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasPageRoutingModule { }
