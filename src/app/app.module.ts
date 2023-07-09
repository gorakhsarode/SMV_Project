import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';






@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // HomeModule,
    //  Admin1Module,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatProgressBarModule,
    NgxBootstrapIconsModule.pick(allIcons)
    
    
    //NgbModule,
   // MatCarouselModule.forRoot(),
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class AppModule { }
