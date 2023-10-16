import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  setting :any
  menu:any
  constructor(private data:DataService){}
  

  
  ngOnInit(): void {
    this.getSettings()
    this.getMenu()
   // console.log(this.setting);
  }

   getSettings(){
    this.data.getsetting('settings.json').subscribe((x)=>{
      this.setting=x
    //  console.log(this.setting);
    });
  }
  
   getMenu(){
    this.data.getfooter('footer-menu.json').subscribe((x)=>{
      this.menu=x
     
      
    });
  }
}
