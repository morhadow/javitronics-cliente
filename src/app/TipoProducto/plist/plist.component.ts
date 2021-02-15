import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { TipoProducto } from '../../Entities/TipoProducto';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistTipoProductoComponent implements OnInit {

  tipoproductos:TipoProducto[] = Array();
  entidad="tipoproducto";

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.tipoproductos = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verTipoProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipoproducto/ver", id])
  }

  editarTipoProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipoproducto/editar",id])
  }

  eliminarTipoProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["tipoproducto/eliminar",id])
  }

}
