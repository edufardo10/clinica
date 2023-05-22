import { Component,OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {
  map: any;
  lat: number = 37.7749; // Latitud de la ubicación
  lng: number = -122.4194;
  ngOnInit() {
    this.initMap();


}
initMap() {
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: this.lat, lng: this.lng },
    zoom: 15
  });
  new google.maps.Marker({
    position: { lat: this.lat, lng: this.lng },
    map: this.map,
    title: 'Ubicación'
  });
}
}
