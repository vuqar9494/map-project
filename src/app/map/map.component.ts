import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from '../data.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  json:any;
  constructor(private data:DataService){}
  ngOnInit(): void {
    this.getSettings()
    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:
      'pk.eyJ1IjoidnVxYXJhaG1hZGxpIiwiYSI6ImNsbnFzbjhvbzEwc2Uya29jbHZjZjl4MTcifQ.34q-bkR2bTN0BHb2FXAIzQ',
      container: 'map', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
      center: [28.858942999999787, 41.11145899999985], // starting position
      zoom: 8.5 // starting zoom
      })
   let iscol =false
    this.map.on('load', () => {
      this.json.features.forEach((e,i) => {
        iscol=!iscol
      //  console.log( i%1==0 ?'#e69d00':'#e1ff00');
      // Add a data source containing GeoJSON data.
      this.map.addSource('maine'+i, {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: e
        });
     
        
        this.map.addLayer({
          'id': 'maine'+i,
          'type': 'fill',
          'source': 'maine'+i, // reference the data source
          'layout': {},
          'paint': {
          'fill-color': iscol ?'#e69d00':'#e1ff00', // blue color fill
          'fill-opacity': 0.7
          }
          });
       });
      // Add a new layer to visualize the polygon.
   
     
      // Add a black outline around the polygon.
    
      });
  }

  getSettings(){
    this.data.getist('istanbul-nufus-geojson.geojson').subscribe((x)=>{
      this.json=x
     // console.log(this.json);
    });
  }
   
}
