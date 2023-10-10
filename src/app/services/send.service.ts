import  { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { EmailSend } from '../model/email-send';
@Injectable()
export class EmailSendService{
    public emailSend! : EmailSend; 
    constructor(
        private http : HttpClient,
        public router : Router
    ){}

    send(emailSend:EmailSend){
         /**
          * realizamos el post
          */
         return this.http.post('http://localhost:3000/envio', emailSend)
         .pipe(map( (resp: any) => {
             console.log(resp);
             if(resp.ok == true){
                 this.router.navigate(['/msj']);
                 return resp;
             }
             else{
                 return resp;
             }
          })
          );
     }
}