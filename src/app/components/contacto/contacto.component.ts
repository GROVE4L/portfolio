import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
declare let $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  public enviando: boolean = false;
  public exitoEnvio: boolean | undefined;

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  public enviar(form: NgForm) {
    this.exitoEnvio = undefined;
    this.enviando = true;
    
    let datos = form.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xayabaog', { name: datos.nombre, replyto: datos.correo, message: datos.mensaje }, { 'headers': headers })
    .toPromise().then(response => {
      this.enviando = false;
      if(response["ok"]) {
        this.exitoEnvio = true;
        $('.toast').toast('show');
      }
      else {
        this.exitoEnvio = false;
        $('.toast').toast('show');
      }
    });  
  }
}
