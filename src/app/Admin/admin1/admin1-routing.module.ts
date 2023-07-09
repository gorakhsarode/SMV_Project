import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdHomeComponent } from '../ad-home/ad-home.component';
import { AdProfileComponent } from '../ad-profile/ad-profile.component';

const routes: Routes = [

//{path:'',redirectTo:'/adhome',pathMatch:'full'},
 {path:'',component:AdHomeComponent},
 {path:'adprofile',component:AdProfileComponent}

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin1RoutingModule { }
