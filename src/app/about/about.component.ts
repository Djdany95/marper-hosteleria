import { ContactoService } from './../services/contacto.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  nameControl: FormControl = new FormControl('', [Validators.required]);
  emailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  tlfControl: FormControl = new FormControl('', [Validators.required]);
  msgControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    const myLatLng = { lat: 42.2225111, lng: -8.7270627 };
    const mapProp = {
      center: myLatLng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const marker = new google.maps.Marker({
      map: this.map,
      position: myLatLng,
      title: 'Marper Hostelería'
    });
  }

  enviarMensaje() {
    this.contactoService
      .sendFeedback(
        this.nameControl.value,
        this.emailControl.value,
        this.msgControl.value,
        this.tlfControl.value
      )
      .subscribe(
        response => {
          alert('Mensaje enviado.');
          this.emailControl.setValue('');
          this.nameControl.setValue('');
          this.msgControl.setValue('');
          this.tlfControl.setValue('');
        },
        error => {
          console.log(error);
        }
      );
  }
}
