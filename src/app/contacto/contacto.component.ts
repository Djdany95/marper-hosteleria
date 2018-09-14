import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private contactoService: ContactoService) {}

  nameControl: FormControl = new FormControl('', [Validators.required]);
  emailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  tlfControl: FormControl = new FormControl('', [Validators.required]);
  msgControl: FormControl = new FormControl('', [Validators.required]);

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
