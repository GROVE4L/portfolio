import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectoList: Array<{nombre:string, descripcion: string, caracteristicas: string[] , imgUrl: string, galeria: string[]}> = [
    { nombre: "Portfolio", 
    descripcion: "Mi portfolio de presentación.\nNueva Linea",
    caracteristicas: ["Rapido", "Seguro", "Facil de usar"], 
    imgUrl:"https://i.ibb.co/jbGYSDG/G.jpg",
    galeria: ["https://i.ibb.co/PTDn2nt/Demo.jpg","../../../assets/img/fondoport.png"] },

    { nombre: "Sistema de GROVE4L", 
    descripcion: "Una descripcion mediana, se seguira con lorem: Cupcake ipsum dolor sit amet gummies brownie macaroon jelly-o. Soufflé topping marshmallow. Toffee apple pie pudding jelly-o candy pastry muffin wafer marshmallow. Tart brownie jelly beans.",
    caracteristicas: [], //Sin caracteristicas
    imgUrl:"https://i.ibb.co/CmMt9bT/negocio-Logo.png",
    galeria: [] }, 

    { nombre: "Sistema de Restaurant", 
    descripcion: "Una descripcion muy larga: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    caracteristicas: ["Caracteristica A", "Caracteristica B", "Caracteristica C"], 
    imgUrl:"https://i.ibb.co/PTDn2nt/Demo.jpg",
    galeria: [] },
  ];

  constructor() { }

  public getProyectos() {
    return this.proyectoList;
  }
}
