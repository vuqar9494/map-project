import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('false', style({ 'height': '0px', 'display': 'none' })),
      state('true', style({ 'height': '*' })),

      transition('false => true', [
        style({ 'display': 'block' }),
        animate('300ms ease-in')
      ]),

      transition('true => false', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
 

  menu: any;
  setting :any
  user:any
  constructor(private data:DataService){}
  

  
  ngOnInit(): void {
    this.getSettings()
    this.getMenu()
    this.getUser()
   // console.log(this.setting);
  }

   getSettings(){
    this.data.getsetting('settings.json').subscribe((x)=>{
      this.setting=x
    });
  }
  
   getMenu(){
    this.data.getmenu('menu.json').subscribe((x)=>{
      this.menu=x
     
      
    });
  }

   getUser(){
    this.data.getuser('user.json').subscribe((x)=>{
      this.user=x
      //console.log(this.user);
      
    });
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (!(x.className.includes("responsive"))) {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
