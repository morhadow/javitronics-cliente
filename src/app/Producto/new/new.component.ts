import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entities/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProductoComponent implements OnInit {

  productos: Producto = new Producto;
  entidad="producto";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarTipoProducto() {
    let objeto=JSON.stringify(this.productos);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["producto/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}