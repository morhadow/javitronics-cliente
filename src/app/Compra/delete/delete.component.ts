import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Entities/Compra';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteCompraComponent implements OnInit {

  compras: Compra = new Compra();
  entidad="compra";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarCompra();
  }

  editarCompra() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.compras=data;
    })
  }

  eliminarCompra(compra: Compra) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Compra eliminada con éxito");
        this.router.navigate(["compra/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
