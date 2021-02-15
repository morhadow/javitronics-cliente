import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entities/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditProductoComponent implements OnInit {

  productos: Producto = new Producto();
  entidad="producto";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarProducto();
  }

  editarProducto() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.productos=data;
    })
  }
  
  actualizarProducto() {
    let id=localStorage.getItem("id");
    let entidad="producto"
    let objeto=JSON.stringify(this.productos);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["producto/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
