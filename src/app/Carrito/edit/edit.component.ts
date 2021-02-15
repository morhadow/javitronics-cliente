import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Entities/Carrito';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditCarritoComponent implements OnInit {

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
  
  actualizarCarrito() {
    let id=localStorage.getItem("id");
    let entidad="carrito"
    let objeto=JSON.stringify(this.carritos);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["carrito/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
