import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProducto } from 'src/app/Entities/TipoProducto';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewTipoProductoComponent implements OnInit {

  tipoproductos: TipoProducto = new TipoProducto();
  
  constructor(private service:ServiceService, private router: Router, private _location: Location) { }
  
  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="tipoproducto"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.tipoproductos=data;
    })
  }

  editarTipoProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipoproducto/editar",id])
  }

  eliminarTipoProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipoproducto/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
