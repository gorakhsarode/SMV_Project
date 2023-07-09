import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-ad-home',
  templateUrl: './ad-home.component.html',
  styleUrls: ['./ad-home.component.css']
})
export class AdHomeComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
    console.log("Admin_Module_Load")

  }

}
