import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Entities/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewFacturaComponent implements OnInit {

  facturas: Factura = new Factura;
  entidad="factura";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarFactura() {
    let objeto=JSON.stringify(this.facturas);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["factura/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}
