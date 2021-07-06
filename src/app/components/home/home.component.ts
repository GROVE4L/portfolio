import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public descargar() {
    let link = document.createElement("a");
    link.download = "CV-GuidoRojas-APU";
    link.href = "/assets/archivos/CV_GuidoGabrielRojas_AnalistaPorgramadorUniversitario.pdf";
    link.click();

    //window.open('/assets/archivos/CV_GuidoGabrielRojas_AnalistaPorgramadorUniversitario.pdf', '_blank');
  }
}
