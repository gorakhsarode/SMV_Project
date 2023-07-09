import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { AdHomeComponent } from '../ad-home/ad-home.component';
import { AdProfileComponent } from '../ad-profile/ad-profile.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AdHomeComponent,
    AdProfileComponent
  ],
  imports: [
    CommonModule,
    Admin1RoutingModule,
   // MatSidenavModule
    //AppRoutingModule
  ]
})
export class Admin1Module { }
