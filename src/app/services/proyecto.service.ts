import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectoList: Array<{nombre:string, descripcion: string, caracteristicas: string[] , imgUrl: string, galeria: string[]}> = [
    { nombre: "Portfolio", 
    descripcion: "El mismo portfolio forma parte de esta muestra. Es que su misma creación es un ejemplo breve pero consiso de los frecuentes procesos de la programación: Bucle, array, etc.\nLe invito a observar mi código, así estimará un panorama de mi forma de programar.",
    caracteristicas: [], 
    imgUrl:"../../../assets/img/GLogo.png",
    //galeria: ["https://i.ibb.co/PTDn2nt/Demo.jpg","../../../assets/img/fondoport.png","https://i.ibb.co/CmMt9bT/negocio-Logo.png","https://i.ibb.co/jLzJ26S/WolfST2.png"] },
    galeria: [] },

    { nombre: "Juguetería WaWa", 
    descripcion: "Si juntamos una numerosa cantidad de juguetes y una administración desorientada, tenemos como resultado una extenuante jornada laboral para los integrantes de esta juguetería. Dicha situación fue lo que llevo al dueño a contactarme.\nEntonces, ¿que le ofrecí?, un sistema que le permite administrar de forma detallada y comprobable cada uno de los movimientos de su negocio.",
    caracteristicas: [],
    imgUrl:"../../../assets/img/Proyecto-2/LogoProyecto.png",
    galeria: [] }, 

    { nombre: "Sistema de Restaurant", 
    descripcion: "Circunstancias recientes han hecho que el sector gastronomico se acerque aun más al internet. Este le ofrece un mundo mas amplio de posibilidades, desde tener una organización mas estable en el local hasta un eficiente servicio de delivery.\nY, en este contexto, ofrezco un programa que pueda hacer el trajecto a la digitalidad más comodo y accesible",
    caracteristicas: [], 
    imgUrl:"https://i.ibb.co/PTDn2nt/Demo.jpg",
    galeria: [] },
  ];

  constructor() { }

  public getProyectos() {
    return this.proyectoList;
  }
}
