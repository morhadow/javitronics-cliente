import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProducto } from 'src/app/Entities/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTipoProductoComponent implements OnInit {

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
  
  actualizarTipoProducto() {
    let id=localStorage.getItem("id");
    let entidad="tipoproducto"
    let objeto=JSON.stringify(this.tipoproductos);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["tipoproducto/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
