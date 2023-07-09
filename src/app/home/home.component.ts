import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  count1: any ="10011";
  count2: any ="101";
  count3: any ="102";

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../assets/slid1 (1).jpg','../assets/slid1 (2).jpg','../assets/slid1 (3).jpg']

  constructor(config: NgbCarouselConfig) {

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

   //-- for Notice Board Dumy COntenct -----
noticeBordData:any=
[  
  {  
    "id": 1,  
    "Content": "Welcome WelcomeWelcomeWelcomeWelcomeWelcome",  
    "Doc": "ABC"  
  },
  
   
  {  
    "id": 2,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }, 
   
  {  
    "id": 3,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }, 
  {  
    "id": 4,  
    "Content": "Welcome WelcomeWelcomeWelcomeWelcomeWelcome",  
    "Doc": "ABC"  
  },
  
   
  {  
    "id": 5,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }, 
   
  {  
    "id": 6,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }, 

  {  
    "id": 7,  
    "Content": "Welcome WelcomeWelcomeWelcomeWelcomeWelcome",  
    "Doc": "ABC"  
  },
  
   
  {  
    "id": 8,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }, 
   
  {  
    "id": 9,  
    "Content": "Welcome",  
    "Doc": "ABC"  
  }
]



  ngOnInit(): void {

    console.log("Home_Module_Load")

  }

}



