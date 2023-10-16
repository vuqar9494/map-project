import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards=[]
  constructor(private data:DataService){}
  tempCard

  
  ngOnInit(): void {
    this.getSettings()
    
  
  }

  async getSettings(){
 

    this.data.getcard('1-main-page/card_json.json').subscribe((x)=>{
      this.cards=this.data.cards.concat(x)
    //  console.log(this.cards);
    this.tempCard=this.cards.slice(this.page-1,this.pagesize)
    });
  }

page=1
pagesize=24
  onScroll(){

if ((this.cards.length/24)<=this.page) {
  //console.log('test');
  
  return;
}
this.page++
if ((this.cards.length -this.tempCard.length)>=24) {
 
this.tempCard= this.tempCard.concat(this.cards.slice((this.page-1)*this.pagesize,(this.page)*this.pagesize))
}else{
//console.log('else',(this.page-1)*this.pagesize,this.cards.length);

  this.tempCard= this.tempCard.concat(this.cards.slice((this.page-1)*this.pagesize,this.cards.length))
  this.page++

} 
//console.log(this.tempCard);
  }

}
