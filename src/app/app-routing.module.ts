import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { outlet } from 'ngx-bootstrap-icons';
import { AdHomeComponent } from './Admin/ad-home/ad-home.component';
//import { MeanHComponent } from './home/mean-h/mean-h.component';

const routes: Routes = [
      
      {
      path:'',loadChildren: () =>import ('./home/home.module').then((m)=>m.HomeModule)
      },
      {
       path:'admin1',loadChildren: () =>import ('./Admin/admin1/admin1.module').then((m)=>m.Admin1Module)
       //,outlet:'xyz'
        },
        

  
   // Add new module only after line 10
  
  // {path:'adhome', component:AdHomeComponent, data:{reuse:false}}

  //  {
  //   path:'/ad-home',component:AdHomeComponent,children:[
  //     {     path:'/ad-home',loadChildren:() => import('./Admin/admin1/admin1.module')}
  //   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
