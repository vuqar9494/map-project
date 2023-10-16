import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

}
