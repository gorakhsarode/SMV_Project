import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMV_Project';
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
/*
  @HostListener('mouseover') onMouseOver() {
      const elementCollection = document.getElementsByClassName('navbar');
    if (elementCollection[0].clientWidth > 1007) {
    this.renderer.addClass(this.el.nativeElement, 'open');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'open');
  }
*/
//////show_subM:any=false;

//@HostListener('mouseover')
//mouseEnter(){
  // this.show_subM=true;
  //console.log("mouse enter : "+this.show_subM);
//}
//@HostListener('mouseout')
//mouseLeave(){
  //  this.show_subM=false;
 //console.log('mouse leave :'+this.show_subM);
//}



  ngOnInit(): void {
    console.log("App_Module_Load")

  }
  
  
}
