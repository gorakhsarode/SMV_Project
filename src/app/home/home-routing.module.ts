import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ArtsComponent } from './arts/arts.component';
import { ClassComponent } from './class/class.component';
import { ContactComponent } from './contact/contact.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HomeComponent } from './home.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { MeanHComponent } from './mean-h/mean-h.component';
import { ScienceComponent } from './science/science.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
   {path:'',redirectTo:'/mean-h',pathMatch:'full'},  
   {path:'mean-h',component:MeanHComponent},
   {path:'science',component:ScienceComponent},
  // {path:'arts',component:ArtsComponent},
   {path:'class',component:ClassComponent},
   {path:'staff',component:StaffComponent},
   {path:'facilities',component:FacilitiesComponent},
   {path:'activities',component:ActivitiesComponent},
   {path:'link',component:LinkComponent},
   {path:'contact',component:ContactComponent},
   {path:'login',component:LoginComponent},
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
