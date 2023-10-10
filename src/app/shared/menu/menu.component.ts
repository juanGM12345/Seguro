import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  scroll:boolean=false;
  show=false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true)
  }
  scrolling=(s:any)=>{
    let sc = s.target.scrollingElement.scrollTop;
    console.log();
    if(sc >=100){
      this.scroll=true;
      this.show=true
    }
    else{
      this.scroll=false;
      this.show=false;
    }
}
}