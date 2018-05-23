import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var myLatLng = { lat: 42.2225111, lng: -8.7270627 };
    var mapProp = {
      center: myLatLng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var marker = new google.maps.Marker({
      map: this.map,
      position: myLatLng,
      title: 'Marper Hostelería'
    });
  }

}
