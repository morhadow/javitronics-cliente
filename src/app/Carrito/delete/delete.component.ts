import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Entities/Carrito';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteCarritoComponent implements OnInit {

  carritos: Carrito = new Carrito();
  entidad="carrito";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarCarrito();
  }

  editarCarrito() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.carritos=data;
    })
  }

  eliminarCarrito(carrito: Carrito) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Carrito eliminado con éxito");
        this.router.navigate(["carrito/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
