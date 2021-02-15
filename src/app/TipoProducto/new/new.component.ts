import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProducto } from 'src/app/Entities/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewTipoProductoComponent implements OnInit {

  tipoproductos: TipoProducto = new TipoProducto;
  entidad="tipoproducto";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarTipoProducto() {
    let objeto=JSON.stringify(this.tipoproductos);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["tipoproducto/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}
