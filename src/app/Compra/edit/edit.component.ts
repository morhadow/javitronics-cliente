import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Entities/Compra';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditCompraComponent implements OnInit {

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
  
  actualizarCompra() {
    let id=localStorage.getItem("id");
    let entidad="compra"
    let objeto=JSON.stringify(this.compras);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["compra/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
