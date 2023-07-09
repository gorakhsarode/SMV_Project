import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ScienceComponent } from './science/science.component';
import { ArtsComponent } from './arts/arts.component';
import { ClassComponent } from './class/class.component';
import { MeanHComponent } from './mean-h/mean-h.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';
import { LinkComponent } from './link/link.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { ActivitiesComponent } from './activities/activities.component';
//import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ScienceComponent,
    ArtsComponent,
    ClassComponent,
    MeanHComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,StaffComponent,
     LinkComponent, FacilitiesComponent,
    ContactComponent,ActivitiesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //AppRoutingModule,
    MatGridListModule,
    MatTabsModule ,
    MatButtonToggleModule,
    NgbCarouselModule,
    MatMenuModule,
    NgxBootstrapIconsModule.pick(allIcons),
    
    
 
  ],
  exports:[
   
  ]
  
})
export class HomeModule{ }
