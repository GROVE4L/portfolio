import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectoList: Array<{nombre:string, descripcion: string, caracteristicas: string[] , imgUrl: string, galeria: string[], linkDemo: string, credenciales: string}> = [
    { nombre: "Portfolio", 
    descripcion: "El mismo portfolio forma parte de esta muestra. Es que su misma creación es un ejemplo breve pero conciso de los frecuentes procesos de la programación en Angular: SPA, componentes, servicios, etc.\nLe invito a observar mi código, así estimará un panorama de mi forma de programar.",
    caracteristicas: ["Angular", "Formspree", "Javascript", "Bootstrap", "Typescript", "Firebase Hosting", "Web Responsive"], 
    imgUrl:"../../../assets/img/GLogo.png",    
    galeria: [],
    linkDemo: "https://github.com/GROVE4L/portfolio",
    credenciales: "" },

    { nombre: "Sistema Gestión de Restaurante", 
    descripcion: "Circunstancias recientes han hecho que el sector gastronómico se acerque aán más al internet. Este le ofrece un mundo más amplio de posibilidades, desde tener una organización más estable en el local hasta un eficiente servicio de delivery.\nY, en este contexto, ofrezco un programa que pueda hacer el trayecto a la digitalidad más cómodo y accesible.",
    caracteristicas: ["Angular", "Node.js", "Javascript", "Chart.js", "Bootstrap", "ng-bootstrap","Typescript", "Firebase", "Web Responsive"],
    imgUrl: "https://i.ibb.co/PTDn2nt/Demo.jpg",
    galeria: ["../../../assets/img/Proyecto-3/img-1-min.png","../../../assets/img/Proyecto-3/img-2-min.png","../../../assets/img/Proyecto-3/img-3-min.png","../../../assets/img/Proyecto-3/img-4-min.png","../../../assets/img/Proyecto-3/img-5-min.png","../../../assets/img/Proyecto-3/img-6-min.png","../../../assets/img/Proyecto-3/img-7-min.png"],
    linkDemo: "https://prueba-restaurante.ga/",
    credenciales: "Usuario: dueno\nPassword: dueno"},

    { nombre: "Juguetería WaWa", 
    descripcion: "Si juntamos una numerosa cantidad de juguetes y una administración desorientada, tenemos como resultado una extenuante jornada laboral para los integrantes de esta juguetería. Dicha situación fue lo que llevo al dueño a contactarme.\nEntonces, ¿qué le ofrecí?, un sistema que le permite administrar de forma detallada y comprobable cada uno de los movimientos de su negocio.",
    caracteristicas: [],
    imgUrl:"../../../assets/img/Proyecto-2/LogoProyecto.png",
    galeria: [],
    linkDemo: "",
    credenciales: "" }, 

    { nombre: "Carnicería Del Campo", 
    descripcion: "Esta aplicación de escritorio de gestión de stock fue uno mis primeros proyectos para un cliente: una carnicería ubicada en San Salvador de Jujuy.\nEl proyecto fue realizado con el fin de agilizar los procesos en el negocio por lo que fue una oportunidad perfecta para implementar mis conocimientos en aplicaciones de escritorio, desarrollado en C# y usando SQL Server como base de datos.\LPasado un año desde la implementación inicial, decidí actualizar el sistema de escritorio a una aplicación web, obteniendo resultados satisfactorios y agilizando aún más los procesos asi como también el soporte técnico del proyecto.",
    caracteristicas: ["Angular", "Node.js", "Javascript", "Chart.js", "Bootstrap", "Hasar SMH/PT 250 F", "Typescript", "Firebase", "Web Responsive"],
    imgUrl:"../../../assets/img/Proyecto-4/LogoProyecto.png",
    galeria: [],
    linkDemo: "",
    credenciales: "" },

    { nombre: "ToPin | Tome Pin y haga Pum", 
    descripcion: "Un sistema para gestionar la de venta de bebidas alcohólicas por delivery para un pequeño emprendimiento.\nEsta aplicación fue desarrollada en la IDE de Netbeans usando lenguaje Java y elaboración de reportes con Jasper.",
    caracteristicas: ["Netbeans", "Java", "Formularios", "Apache derby", "Jasper", "Aplicación de esceritorio"],
    imgUrl:"../../../assets/img/Proyecto-5/LogoProyecto.jpg",
    galeria: [],
    linkDemo: "",
    credenciales: "" },

    { nombre: "Pawn | SA-MP", 
    descripcion: "Desarrollo de servidores multijugadores SA-MP. En este lenguaje aprendí las nociones básicas de la programacion asi como tambien la lógica para implementar soluciones eficientes y creativas. Programación lineal en lenguaje Pawn, almacenamiento de datos usando MySQL, o bien, en archivos de configuración de manera local.",
    caracteristicas: ["Pawn", "Basado en sintaxis C", "Programación Lineal", "Includes", "MySQL", "Plugins", "Scriptfiles"],
    imgUrl:"../../../assets/img/Proyecto-6/LogoProyecto.png",
    galeria: [],
    linkDemo: "https://es.wikipedia.org/wiki/Pawn",
    credenciales: "" },
  ];

  constructor() { }

  public getProyectos() {
    return this.proyectoList;
  }
}
