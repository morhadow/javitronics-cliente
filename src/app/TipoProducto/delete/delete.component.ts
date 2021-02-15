import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProducto } from 'src/app/Entities/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteTipoProductoComponent implements OnInit {

  tipoproductos: TipoProducto = new TipoProducto();
  entidad="tipoproducto";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarTipoProducto();
  }

  editarTipoProducto() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.tipoproductos=data;
    })
  }

  eliminarTipoProducto(tipoproducto: TipoProducto) {
    let id=localStorage.getItem("id");
    this.service.delete(this.entidad, +id)
      .subscribe(data => {
        alert("Tipo de producto eliminado con éxito");
        this.router.navigate(["tipoproducto/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
