import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entities/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteProductoComponent implements OnInit {

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

  eliminarProducto(Producto: Producto) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Producto eliminado con éxito");
        this.router.navigate(["producto/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
