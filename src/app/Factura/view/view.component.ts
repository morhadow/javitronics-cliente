import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Entities/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewFacturaComponent implements OnInit {

  facturas: Factura = new Factura();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="factura"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.facturas=data;
    })
  }

  editarFactura(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["factura/editar",id])
  }

  eliminarFactura(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["factura/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
