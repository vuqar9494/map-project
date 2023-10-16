import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, Color } from 'chart.js';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { DataService } from '../data.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements AfterViewInit,OnInit {
  pie: any;
  barasc: any;
  bardsc: any;
  AllData: any;
 
  ngAfterViewInit(): void {
  
  }
  constructor(private data:DataService){}
  map: Map;
 
  table: Tabulator;
  ngOnInit(): void {
    this.getpie()
    this.getbarasc()
    this.getbardsc()
    this.gettable()
  }


  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels ;
  public pieChartDatasets
  public pieChartLegend = true;
  public pieChartPlugins = [];
  ///////////////////////
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] 
  //////
  public barChartDataD: ChartConfiguration<'bar'>['data'] 

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  getpie(){
    this.data.getpie('./../../assets/data/3-item-view/all-pie-chart.json').subscribe((x)=>{
      //console.log(x);
      this.pie=x
        this.pieChartLabels = this.pie.data.map(x=>{return x.label});
     this.pieChartDatasets = [ {
      data: this.pie.data.map(x=>{return x.vote})
    } ];
   

    });
  }


  gettable(){
    this.data.getpie('./../../assets/data/3-item-view/list-of-results.json').subscribe((x)=>{
    //  console.log(x);
      this.AllData=x
   
      // let tab = document.createElement('div');
    
      // this.table= new Tabulator(tab, {
      //   //  responsiveLayout:true,
      //     data: this.AllData.data,
      //     reactiveData:false, 
      //     columns: this.AllData.columns.map(x=>{return { title: x.title, field: x.field,width:x.field=='id'?"50":x=='status'?"70":"150" } }),
      //     layout: 'fitData',
      //   addRowPos: "top",         
      //   history: false,         
       
      //   movableColumns: false,     
      //   resizableRows: true,  
          
      //   });
      //   document.getElementById('my-tabular-table').appendChild(tab);
      

    });
  }

  getbarasc(){
    this.data.getpie('./../../assets/data/3-item-view/top-10-ascending.json').subscribe((x)=>{
     // console.log(x);
      this.barasc=x;
      this.barChartData=
    {
      labels: this.barasc.data.map(x=>{return x.label}),
      datasets: [
        { data: this.barasc.data.map(x=>{return x.vote}) 
        , label:''  ,
        backgroundColor: ["green", "green"],
      },
       
      ]
    };
   

    });
  }



  getbardsc(){
    this.data.getpie('./../../assets/data/3-item-view/top-10-desc.json').subscribe((x)=>{
   //   console.log(x);
      this.bardsc=x;
      this.barChartDataD=
    {
      labels: this.bardsc.data.map(x=>{return x.label}),
      datasets: [
        { data: this.bardsc.data.map(x=>{return x.vote}) 
        , label:''  ,
        backgroundColor: ["red", "red"],
      },
       
      ]
    };
   

    });
  }




  //////////////////



    
/////////
}
