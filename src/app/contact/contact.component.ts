import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailSendService } from '../services/send.service';
import { EmailSend } from '../model/email-send';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[
    EmailSendService
  ]
})
export class ContactComponent {
  public emailSend : EmailSend;
  datos: FormGroup;
constructor( private httpClient: HttpClient,
    private _emailSend : EmailSendService
  ){
    this.emailSend = new EmailSend('', '', '', '');
    this.datos = new FormGroup({
    nombre : new FormControl('',Validators.required),
    telefono : new FormControl('', Validators.required),
    correo : new FormControl('', [Validators.required, Validators.email]),
    mensaje : new FormControl('', Validators.required)
  });
}
sendEmail(){
  this._emailSend.send(this.emailSend).subscribe(
    resp => {
     let respuesta = JSON.parse(JSON.stringify(resp));
     //console.log(respuesta);
      if(respuesta.statusCode == 200){
        //se inicia la sesion
      }
    },
    error => {
      let errores = JSON.parse(JSON.stringify(error));
      //console.log(errores);
    }
  );
}
}
