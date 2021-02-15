import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Entities/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteFacturaComponent implements OnInit {

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

  eliminarFactura(factura: Factura) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Factura eliminada con éxito");
        this.router.navigate(["factura/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
