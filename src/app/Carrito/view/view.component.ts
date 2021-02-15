import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Entities/Carrito';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewcarritosComponent implements OnInit {

  carritos: Carrito = new Carrito();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="carrito"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.carritos=data;
    })
  }

  editarCarrito(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["carrito/editar",id])
  }

  eliminarCarrito(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["carrito/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
