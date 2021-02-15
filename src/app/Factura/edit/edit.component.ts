import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Entities/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditFacturaComponent implements OnInit {

  facturas: Factura = new Factura();
  entidad="factura";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarFactura();
  }

  editarFactura() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.facturas=data;
    })
  }
  
  actualizarFactura() {
    let id=localStorage.getItem("id");
    let entidad="factura"
    let objeto=JSON.stringify(this.facturas);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["factura/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
