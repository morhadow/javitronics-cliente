import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Entities/Compra';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewCompraComponent implements OnInit {

  compras: Compra = new Compra();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="compra"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.compras=data;
    })
  }

  editarCompra(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["compra/editar",id])
  }

  eliminarCompra(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["compra/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
