import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Producto } from '../../Entities/Producto';
import { TipoProducto } from '../../Entities/TipoProducto';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewProductoComponent implements OnInit {

  producto: Producto = new Producto();
  entidad="producto";
  nombre: String;
  codigo: String;
  existencias: number;
  idTipoproducto:number;

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad,+id)
    .subscribe(data=>{
      this.codigo=data.producto.codigo;
      this.existencias=data.producto.existencias;
      this.idTipoproducto=data.tipoproducto.id;
      this.producto=data;
    })

 

  }

  editarProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["producto/editar",+id])
  }

  eliminarProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["producto/eliminar",id])
  }

   atras() {
    this._location.back();
  }
}
