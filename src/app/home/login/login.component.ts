import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }
  
  open1(a :any,b:any){
    
    if(a =='5' && b =='7'){
    console.log("me alooooo")
    //this.router.navigate([{outlets:{xyz:['admin1']}}])
    // console.log("me geloo")
   this.router.navigate(['admin1'])
    }
    else{
      console.log('Invalid Entry...!!')
    }
  }

  ngOnInit(): void {
  }

}
