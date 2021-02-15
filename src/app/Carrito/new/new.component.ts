import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Entities/Carrito';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCarritoComponent implements OnInit {

  carritos: Carrito = new Carrito;
  entidad="carrito";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarCarrito() {
    let objeto=JSON.stringify(this.carritos);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["carrito/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}
